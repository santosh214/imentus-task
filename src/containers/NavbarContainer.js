import Navbar from "../components/Navbar";
import { connect } from "react-redux";
const mapStateToProps=state=>({
    cartData:state.cartItems
})
export default connect(mapStateToProps)(Navbar)