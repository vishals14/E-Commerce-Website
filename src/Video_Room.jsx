import React from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";

const Video_Room = () => {
  const { id } = useParams();

  const meeting = (element) => {
    const appID = 1243337269;
    const serverSecret = "f8e6fb486f563d2c755f226b8bb4896f";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      id,
      Date.now().toString(),
      "vishal"
    );

    // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
      container: element,

      sharedLinks: [
        {
          name: 'Personal link',
          url:`http://localhost:5173/${id}`
          
        },
      ],
      
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall, 
        // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
      },
    });
  };
  return (
    <>
    <div ref={meeting}/>
    </>
  )
}

export default Video_Room
