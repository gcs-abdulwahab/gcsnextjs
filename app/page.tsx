import SignBoard from "./components/SignBoard";
import SignBoards from "./data/signs";
import { SignBoardType } from "./types";

const page = () => {
	let signdata: SignBoardType = SignBoards[1];

	return (
		<div className="h-screen w-screen flex items-center justify-center">
			<SignBoard {...signdata} />
		</div>
	);
};
export default page;
