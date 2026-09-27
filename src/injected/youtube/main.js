import { createMainWorldBridge } from "../../shared/page-bridge.js";

const pageBridge = createMainWorldBridge();

function publishVisitorData() {
  pageBridge.postToContent({
    name: "youtube_on_visitor_data",
    data: { visitor_data: window.ytcfg?.data_?.VISITOR_DATA },
  });
}

pageBridge.onMessageFromContent((message) => {
  if (message?.name === "youtube_request_visitor_data") publishVisitorData();
});

publishVisitorData();
