import css from './StatusFilter.module.css';
import { Button } from '../Button/Button';

export const StatusFilter = () => {
	return (
		<div className={css.wrapper}>
			<Button>All</Button>
			<Button>Active</Button>
			<Button>Compledet</Button>
		</div>
	);
};
