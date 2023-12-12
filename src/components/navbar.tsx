function Navbar({ idx }: { idx: number }) {
    return(
        <>
        <div className="fixed z-50 flex h-[160px] w-full items-center justify-between px-14">
            <div className="flex items-center gap-20">
                <img src="/itebe.svg" alt="" className="w-24 h-24" />
                <p className="text-[30px] font-medium cursor-pointer">Home</p>
            </div>
        </div>
        </>
    )
}

export default Navbar;
