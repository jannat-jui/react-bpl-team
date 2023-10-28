

const Playercart = ({selectPlayer, totalSalary}) => {
    return (
        <div className="text-center">
            <h1 className="text-[#FFBD47] font-bold text-3xl">🏏 Players Added: {selectPlayer.length}</h1>
            <h1 className="text-[#FFBD47] font-bold text-3xl mt-6">Total Cost: ${totalSalary}</h1>
        </div>
    );
};

export default Playercart;