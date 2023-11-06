import { useDispatch } from 'react-redux';
import { addTask } from 'redux/actions';

import { Button } from '../Button/Button';
import css from './TaskForm.module.css';

export const TaskForm = () => {
	const dispatch = useDispatch();

	const handleSubmit = (event) => {
		event.preventDefault();
		const form = event.target;

		dispatch(addTask(form.elements.text.value));
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
