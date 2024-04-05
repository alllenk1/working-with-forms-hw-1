export type FormProps = {
	coords: { x: number, y: number };
	onClose: (shape: string, size: string, color: string) => void;
}

export type IconProps = {
	params: {
		shape: string,
		size: string,
		color: string,
		x: number,
		y: number
	}
};

export type IconsType = {
	shape: string,
	size: string,
	color: string,
	x: number,
	y: number
};