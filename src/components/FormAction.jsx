import { Button } from "./Button";

export default function FormAction ( {
    handleSubmit,
    text
} ) {
    return (
			<Button
				onSubmit={handleSubmit}
				type="submit"
			>
				{text}
			</Button>
		);
}
