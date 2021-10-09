const SkillContentItem = ({ title, percent }) => {
    return (
        <div className="flex flex-row overflow-hidden rounded-md bg-green-main w-full mt-4 items-center">
            <div role="progressbar" style={{ width: `${percent}` }} data-percent="100%" className="bg-green-mainlight p-1">
                <span className="border-0 h-1 overflow-hidden text-white">{title}</span>
            </div>
            <span className="pl-3 pb-30 text-white ml-auto mr-4">{percent}</span>
        </div>
    );
}

export default SkillContentItem;