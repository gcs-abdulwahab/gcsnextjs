type signDataType = {
	engName: string;
	urduName: string;
	tailwindcolor: string;
};

type SignBoardType = {
	signs: signDataType[];
	rtl: boolean;
	symbol: string;
};

export type { SignBoardType, signDataType };
