export default function ModalContent({ setShowModal, setDecisionCheck, props }) {
    return (
      <div className="flex justify-center items-center absolute w-full h-full top-0 backdrop-blur-sm">
        <div className="bg-black min-h-36 min-w-[300px] md:min-h-[200px] md:min-w-[500px] flex flex-col">
            <div className="flex-1 justify-center items-center flex">{props.message}</div>
            <div className="flex">
                <button className="flex-1 m-3" onClick={()=>{setShowModal(false), setDecisionCheck(props.opt[0])}}>{props.opt?props.opt[0]:"No"}</button>
                <button className="flex-1 m-3 py-3 bg-red-400 rounded-lg" onClick={()=>{setShowModal(false), setDecisionCheck(props.opt[1])}}>{props.opt?props.opt[1]:"Yes"}</button>
            </div>
        </div>
      </div>
    );
  }