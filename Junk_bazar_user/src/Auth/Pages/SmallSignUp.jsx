
import PhoneInput from "react-phone-number-input";
import userImage from '../../assets/PNG/smallUserImag.png'
import { useState } from "react";
import Button from "../../Components/auth/Button";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../api-config/axiosInstance";
import Swal from "sweetalert2";

const SmallSignUp = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const navigate = useNavigate();
    const [checked,
        setChecked] = useState(true);

    const [isValidPhoneNumber,
        setIsValidPhoneNumber] = useState(false);

    const handlePhoneNumberChange = (e) => {
        const value = e.target.value;
        const phoneRegex = /^\d{10}$/;
        const isValid = phoneRegex.test(value);

        console.log("isValid", isValid);
        setPhoneNumber(value);
        setIsValidPhoneNumber(isValid);
    };
    const signUpService = async () => {
        console.log("phone number ", phoneNumber.slice(3, 13))
        const mobile = phoneNumber.slice(3, 13)
        const payload = {
            dialCode: "+91",
            phoneNumber: mobile
        };

        try {
            const resp = await axiosInstance.post("/register", payload);
            const dataObject = resp.data;

            if (dataObject.statusCode === 200) {
                Swal.fire({
                    icon: "success",
                    position: "center",
                    showConfirmButton: true,
                    timer: 2500,
                    title: dataObject.message
                });
                navigate("/otp-verify", {
                    state: {
                        mobile
                    }
                });
            }
        }
        catch (error) {
            console.error("error", error);

            if (error.response) {
                Swal.fire({
                    icon: "error",
                    position: "center",
                    showConfirmButton: false,
                    timer: 2500,
                    title: error.response.data.error._message
                });
            }
            else if (error.request) {
                // Client made a request but response is not received 
                console.log("<<<<<<<Response Not Received>>>>>>>>");
                console.log(error.request);
            }
            else {
                // Other case 
                console.log("Error", error.message);
            }
            // Error handling here 
        }
    };

    return (
        <div className="small-devices ">

            <div className="pl-10 pr-10 mx-auto">
                <img src={userImage} className="w-[300px] h-[300px] " alt="" />
            </div>
            <div className="bg-white p-10 rounded-t-lg shadow-2xl shadow-slate-900">
                <div className="">
                    <h2 className="text-[#303030]  text-[22px] mt-2 mb-0">
                        Sign Up Now
                    </h2>
                    <p className="text-[#707070]  text-[10px]">
                        Create a new account in four simple steps
                    </p>
                </div>
                <form className="mt-5">
                    <div className="border border-l-zinc-600 rounded p-2 max-w-sm">
                        <PhoneInput
                            maxLength={15}
                            className={"input-phone-number"}
                            international
                            defaultCountry="IN"
                            value={phoneNumber}
                            onChange={setPhoneNumber} />
                    </div>

                    <div className="mt-20">
                        <Button
                            label="Continue"
                            classname="h-[40px]  font-semibold text-[19px] p-[2] text-center bg-[#5AB344] w-full text-white rounded-[27px] outline-none border-none  hover:opacity-80"
                            handleClick={signUpService}

                        />
                        <p className="text-[14px] text-[#4A4A4A] mt-2 text-center font-[400] cursor-pointer">
                            Don't have an account?{" "}
                            <span onClick={() => navigate("/sign-in")}
                                className="text-[#81D742] hover:font-semibold hover:underline cursor-pointer">
                                Sign In
                            </span>
                        </p>
                    </div>
                </form>
            </div>

        </div>


    );
}

export default SmallSignUp;