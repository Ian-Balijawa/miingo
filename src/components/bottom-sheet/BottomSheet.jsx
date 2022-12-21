import React from "react";
// import "react-spring-bottom-sheet/dist/style.css";
// import { BottomSheet } from "react-spring-bottom-sheet";

// const { useState } = React;

// const CustomBottomSheet = () => {
// 	const [open, setOpen] = useState(true);

// 	return <BottomSheet open={open}>My awesome content here</BottomSheet>;
// };

// export default CustomBottomSheet;

import { useState } from "react";
import { BottomSheet } from "react-spring-bottom-sheet";

// if setting up the CSS is tricky, you can add this to your page somewhere:
// <link rel="stylesheet" href="https://unpkg.com/react-spring-bottom-sheet/dist/style.css" crossorigin="anonymous">
import "react-spring-bottom-sheet/dist/style.css";

export default function CustomSheet({ onDismiss, onClick, open, children }) {
	// const [open, setOpen] = useState(false);
	// const onDismiss = () => {
	// 	setOpen(open);
	// };
	return (
		<>
			{/* <button onClick={() => setOpen(true)}>Open</button> */}
			<BottomSheet
				onClick={onClick}
				onDismiss={onDismiss}
				snapPoints={({ minHeight }) => 0.7 * minHeight}
				open={open}
			>
				{ children }
			</BottomSheet>
		</>
	);
}
