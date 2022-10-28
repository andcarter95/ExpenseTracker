import styles from "../../styles/Navbar/Navbar.module.scss";

import ListItemLink from "./ListItemLink";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link to="/">
          <div>Budget</div>
        </Link>
      </div>
      <nav>
        <ul>
          <ListItemLink url="">
            <h3>Home</h3>
          </ListItemLink>

          <ListItemLink url="catagories">
            <h3>Categories</h3>
          </ListItemLink>
          
          <ListItemLink url="transactions">
            <h3>Transactions</h3>
          </ListItemLink>
          
          <ListItemLink url="wallet">
            <h3>Wallet</h3>
          </ListItemLink>
          
          <div className={styles.mobileMenuLinks}>
            <ListItemLink url="profile">
                <h3>Profile</h3>
            </ListItemLink>
          </div>
          
          <div className={styles.mobileMenuLinks}>
            <ListItemLink url="settings">
                <h3>Settings</h3>
            </ListItemLink>
          </div>
          
          <ListItemLink url="logout">
            <h3>Logout</h3>
          </ListItemLink>
        
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
