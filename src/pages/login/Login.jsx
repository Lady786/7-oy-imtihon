import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async () => {
    try {
      const response = await axios.post(`https://ecommerce-backend-fawn-eight.vercel.app/api/auth`, {
        email: email,
        password: password,
      });
      if (response.data) {
        localStorage.setItem("token", response.data);
        console.log(response.data);
        navigate("/products");
      }
    } catch (error) {
      alert("Foydalanuvchi ma'lumotlari hato!");
      console.log("xatolik yuz berdi");
    }
  };

  return (
    <div className="w-screen h-screen bg-blue-200 flex items-center justify-center">
      <div className="w-[400px] h-[300px] border bg-white rounded-xl flex flex-col items-center justify-around">
        <p className="font-bold text-[28px]">Login</p>
        <div>
          <label htmlFor="email">Email</label>
          <input
            className="pl-[5px] border ml-[10px]"
            id="email"
            type="text"
            name=""
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder=" email..."
          />{" "}
          <br />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            className="pl-[5px] border ml-[10px]"
            id="password"
            type="text"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            name=""
            placeholder=" password..."
          />
        </div>
        <button
          onClick={handleSubmit}
          className="border w-[100px] bg-blue-200 text-white rounded-lg "
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Login;
