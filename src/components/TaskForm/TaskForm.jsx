import { Button } from '../Button/Button';
import css from './TaskForm.module.css';

export const TaskForm = () => {
	const handleSubmit = (event) => {
		event.preventDefault();
		const form = event.target;
		form.reset();
	};

	return (
		<form className={css.form} onSubmit={handleSubmit}>
			<input
				type="text"
				name="text"
				className={css.field}
				placeholder="Enter your task..."
			/>
			<Button type="submit">Add task </Button>
		</form>
	);
};
