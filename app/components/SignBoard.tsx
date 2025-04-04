import { SignBoardType, signDataType } from "../types";

const Sign = (data: signDataType) => {
	return (
		<div
			className={`  flex justify-between py-3 space-x-4 px-1 ${data.tailwindcolor} `}
		>
			<span className="text-sm size-4 bg-black inline-block rounded-full text-left"></span>
			<div>
				<span className="font-bold">{data.urduName}</span>
				<h1 className="font-semibold"> {data.engName}</h1>
			</div>
		</div>
	);
};

const SignBoard = ({ rtl, symbol, signs }: SignBoardType) => {
	return (
		<div
			id="signboard"
			className={`bg-amber-400 border-4 w-[300px] items-center flex ${
				rtl ? "flex-row-reverse" : "justify-around"
			}`}
		>
			<div className="h-full px-2">
                <h1 className="font-bold text-3xl text-black" dangerouslySetInnerHTML={{__html: symbol}}></h1>
			</div>
			<div className="flex-grow text-right">
				{signs.map((sign, index) => (
					<Sign key={index} {...sign} />
				))}
			</div>
		</div>
	);
};

export default SignBoard;
