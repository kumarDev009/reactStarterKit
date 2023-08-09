import React, {useContext} from 'react';
import { CustomButton } from "../../Components/FormFields/CustomButton";
import { AppContext } from '../../services/context/appContext';

export const Home = () => {
  const { setHasLoading } = useContext(AppContext);

  const handleSave = () => {
    setHasLoading(true)
  }

  return (
    <>
    <div className="d-flex justify-content-between p-5">
      <h3>Welcome to the Home Page</h3>
      <CustomButton 
      buttonText = 'Save'
      htmlType = "button"
      onClick = {handleSave}
      />
    </div>
    </>
  );
};
