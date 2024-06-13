import { BiCheckCircle } from "react-icons/bi";

interface CustomToastProps {
    title: string;
}

const CustomToast = ({ title }: CustomToastProps) => {
  return (
    <div className="toast toast-top toast-end lg:mt-10 lg:mr-4">
      <div className="alert alert-success">
        <BiCheckCircle /><span>{title}</span>
      </div>
    </div>
  );
};

export default CustomToast;
