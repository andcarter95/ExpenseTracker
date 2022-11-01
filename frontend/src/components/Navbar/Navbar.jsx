import styles from "../../styles/Navbar/Navbar.module.scss";

import ListItemLink from "./ListItemLink";

import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

import { useLogoutUser } from "../../queries/user";
import { useEffect } from "react";
import { queryClient } from "../../constants/config";

const Navbar = () => {
  const { setAuth, auth } = useContext(AuthContext);
  const navigate = useNavigate();
  const { mutate: logoutHandler, isSuccess } = useLogoutUser(); 

  useEffect(() => {
    if (isSuccess){
      queryClient.removeQueries();
      setAuth(false);
      if(!auth) navigate("auth");
    }
  }, [isSuccess])

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
          
          <ListItemLink url="logout" clickHandler={logoutHandler}>
            <h3>Logout</h3>
          </ListItemLink>
        
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
