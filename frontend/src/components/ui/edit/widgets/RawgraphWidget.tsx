const RawGraphWidget = (props: { closeModal: () => void }) => {
  return (
    <div className="border shadow-lg rounded-lg bg-white w-full mb-5">
      <iframe
        id="myIframe"
        className=""
        src="http://localhost:8000"
        allowFullScreen={false}
        aria-label="frame"
        style={{ width: "100%", height: "100vh" }}
      />
    </div>
  );
};

export default RawGraphWidget;
