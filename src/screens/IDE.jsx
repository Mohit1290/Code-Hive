import React, { useEffect, useState, useRef } from "react";
import CodeEditor from "../components/CodeEditor/CodeEditor";
import CodeOutput from "../components/CodeOutput/CodeOutput";
import CodeInput from "../components/CodeInput/CodeInput";
import Navbar from "../components/Navbar/Navbar";
import Peer from "simple-peer";
import io from "socket.io-client";
import { boilerCodes } from "../boilerCodes";
import "./IDE.css";
// import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import TextField from "@material-ui/core/TextField";
// import AssignmentIcon from "@material-ui/icons/Assignment";
// import PhoneIcon from "@material-ui/icons/Phone";
import { CopyToClipboard } from "react-copy-to-clipboard";
const socket = io.connect("http://localhost:5000");
export default function IDE() {
  const [output, setOutput] = useState("");
  const [language, setLanguage] = useState({
    label: "JavaScript",
    value: "javascript",
    id: 63,
    name: "JavaScript",
  });

  const [code, setCode] = useState(boilerCodes(language.id));
  const [toggled, setToggled] = useState(true);
  const [testInput, setTestInput] = useState("");
  const [theme, setTheme] = useState("vs-dark");
  const [status, setStatus] = useState(null);

  const [me, setMe] = useState("");
  const [stream, setStream] = useState();
  const [receivingCall, setReceivingCall] = useState(false);
  const [caller, setCaller] = useState("");
  const [callerSignal, setCallerSignal] = useState();
  const [callAccepted, setCallAccepted] = useState(false);
  const [idToCall, setIdToCall] = useState("");
  const [callEnded, setCallEnded] = useState(false);
  const [name, setName] = useState("");
  const myVideo = useRef();
  const userVideo = useRef();
  const connectionRef = useRef();

  useEffect(() => {
    setCode(boilerCodes(language.id));
  }, [language]);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        setStream(stream);
        myVideo.current.srcObject = stream;
      });

    socket.on("me", (id) => {
      setMe(id);
    });

    socket.on("callUser", (data) => {
      setReceivingCall(true);
      setCaller(data.from);
      setName(data.name);
      setCallerSignal(data.signal);
      answerCall();
    });
  }, []);

  const callUser = (id) => {
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream: stream,
    });
    peer.on("signal", (data) => {
      socket.emit("callUser", {
        userToCall: id,
        signalData: data,
        from: me,
        name: name,
      });
    });
    peer.on("stream", (stream) => {
      userVideo.current.srcObject = stream;
    });
    socket.on("callAccepted", (signal) => {
      setCallAccepted(true);
      peer.signal(signal);
    });

    connectionRef.current = peer;
  };

  useEffect(() => {
    console.log("hellop");
    callUser(idToCall);
  }, [idToCall]);

  const answerCall = () => {
    console.log("hi I accepted the call");
    setCallAccepted(true);
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream: stream,
    });
    peer.on("signal", (data) => {
      socket.emit("answerCall", { signal: data, to: caller });
    });
    peer.on("stream", (stream) => {
      userVideo.current.srcObject = stream;
    });

    peer.signal(callerSignal);
    connectionRef.current = peer;
  };

  const leaveCall = () => {
    setCallEnded(true);
    connectionRef.current.destroy();
  };

  return (
    <div className="interface">
      <div className="questionsTab">
        <h2>Print Hello World</h2>
        <p>Write a program to print Hello World</p>
        <div>
          <p>Expected Output : </p>
          <h3>Hello World</h3>
        </div>

        <div className="videoCall">
          <div className="video-container">
            <div className="video">
              {stream && (
                <video
                  playsInline
                  muted
                  ref={myVideo}
                  autoPlay
                  style={{ width: "250px" }}
                />
              )}
            </div>
            <div className="video">
              {callAccepted && !callEnded ? (
                <video
                  playsInline
                  ref={userVideo}
                  autoPlay
                  style={{ width: "250px" }}
                />
              ) : null}
            </div>
          </div>
          <div className="myId">
            {/* <input
              id="filled-basic"
              label="Name"
              variant="filled"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ marginBottom: "20px" }}
            /> */}
            <CopyToClipboard text={me} style={{ marginBottom: "2rem" }}>
              <button variant="contained" color="primary">
                Copy ID
              </button>
            </CopyToClipboard>

            <input
              id="filled-basic"
              label="ID to call"
              variant="filled"
              value={idToCall}
              onChange={(e) => setIdToCall(e.target.value)}
            />
            {/* <div className="call-button">
              {callAccepted && !callEnded ? (
                <button
                  variant="contained"
                  color="secondary"
                  onClick={leaveCall}
                >
                  End Call
                </button>
              ) : (
                <button
                  color="primary"
                  aria-label="call"
                  onClick={() => callUser(idToCall)}
                >
                  <PhoneIcon fontSize="large" />
                </button>
              )}
              {idToCall}
            </div> */}
          </div>
        </div>
      </div>
      <div className="ide">
        <div className="">
          <Navbar
            setLanguage={setLanguage}
            language={language}
            setTheme={setTheme}
            theme={theme}
            setOutput={setOutput}
            setStatus={setStatus}
            testInput={testInput}
            code={code}
          />

          <CodeEditor
            theme={theme}
            code={code}
            setCode={setCode}
            language={language}
          />
        </div>
        <div className="">
          <div className="outputTab">
            <CodeOutput output={output} toggled={toggled} status={status} />
          </div>
          {/* <CodeInput
            testInput={testInput}
            setTestInput={setTestInput}
            setToggled={setToggled}
          /> */}
        </div>
      </div>
    </div>
  );
}
