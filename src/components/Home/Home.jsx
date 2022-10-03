import { Link } from 'react-router-dom';
import styles from './Home.css';

export default function Home() {
  return (
    <div className={styles.Home}>
      <h1>Home</h1>
      <nav>
        <Link to="/books">Books</Link>
        <Link to="/games">Games</Link>
      </nav>
    </div>
  );
}
