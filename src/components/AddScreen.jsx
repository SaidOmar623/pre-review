import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import {Formik, Form, useField} from 'formik';
import * as Yup from 'yup';
import {useDispatch} from 'react-redux'
import { addProduct } from '../actions/productActions';

const MyTextInput = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className="form-control" {...field} {...props}/>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : (<div className="noerror"></div>)}
        </>
    );
};
const MyRadioButton = ({children, ...props}) => {
    const [field, meta] = useField({...props, type: 'radio'})
    return (
        <>
            <label className="custom-control custom-radio custom-control-inline">
                <input type="radio" className="custom-control-input" {...field} {...props} />
                {children}
            </label>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    );
};
const MyCheckBox = ({children, ...props}) => {
    const [field, meta] = useField({...props, type: 'checkbox'})
    return (
        <>
            <label className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" {...field} {...props} />
                {children}
            </label>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : (<div className="noerror"></div>)}
        </>
    );
};
const MySelect = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <React.Fragment>
        <label htmlFor={props.id || props.name}>{label}</label>
        <select className="form-control" {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : (<div className="noerror"></div>)}
      </React.Fragment>
    );
};

const AddScreen = (props) => {
    const dispatch = useDispatch()
    const history = useHistory()
    
    return(
        <div className="add">
            <div className="container">
                <h4>Add new mobile</h4>
                <Formik
                    initialValues={{
                        brand: '',
                        model: '',
                        year: '',
                        memory: '',
                        color: '',
                        screen: '',
                        sim: '',
                        nfc: '',
                        fourg: ''
                    }}
                    validationSchema={Yup.object().shape({
                        model: Yup.string().required('* required'),
                        brand: Yup.string().oneOf(['sony', 'samsung', 'nokia', 'apple', 'lg'], '* Invalid Brand Name').required('* required'),
                        year: Yup.number().required('* required'),
                        memory: Yup.string().oneOf(['16', '32', '64', '128'])
                    })}
                    onSubmit={(values, {setSubmitting}) => {
                        setTimeout(() => {
                            // alert(JSON.stringify(values, null, 2));
                            setSubmitting(false); 
                            // console.log(values)  
                            dispatch(addProduct(values))
                            history.push('/')
                        }, 400)
                    }}>
                    <Form className="add-form">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="add-group">
                                    <div className="form-group mb-3">
                                        <MyTextInput 
                                            label="Model"
                                            name="model"
                                            type="text"
                                            placeholder="samsung s6"    
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <MyTextInput 
                                            label="Manufacture Year"
                                            name="year"
                                            type="text"
                                            placeholder="2005"    
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <MySelect label="brand" name="brand" >
                                            <option value="">Select Brand</option>
                                            <option value="sony">Sony</option>
                                            <option value="samsung">Samsung</option>
                                            <option value="apple">Apple</option>
                                            <option value="nokia">Nokia</option>
                                            <option value="lg">LG</option>
                                        </MySelect>
                                    </div>
                                    <div className="form-group mb-3">
                                        <MySelect label="memory" name="memory" >
                                            <option value="">options</option>
                                            <option value="16">16GB</option>
                                            <option value="32">32GB</option>
                                            <option value="64">64GB</option>
                                            <option value="128">128GB</option>
                                        </MySelect>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="ch-rad">
                                    <div>
                                        <h6>Specification:</h6>
                                        <div className="form-check">
                                            <MyCheckBox name="sim">
                                                <div className="custom-control-label">Dual SIM</div>
                                            </MyCheckBox>
                                            <MyCheckBox name="nfc">
                                                <div className="custom-control-label">NFC</div>
                                            </MyCheckBox>
                                            <MyCheckBox name="fourg">
                                                <div className="custom-control-label">4G</div>
                                            </MyCheckBox>
                                        </div>
                                    </div>
                                    <div>
                                        <h6>screen:</h6>
                                        <div className="form-check">
                                            <MyRadioButton name="screen" value="4">
                                                <span className="custom-control-label">4"</span>
                                            </MyRadioButton>
                                            <MyRadioButton name="screen" value="5">
                                                <span className="custom-control-label">5"</span>
                                            </MyRadioButton>
                                            <MyRadioButton name="screen" value="6">
                                                <span className="custom-control-label">6"</span>
                                            </MyRadioButton>
                                        </div>
                                    </div>
                                    <div>
                                        <h6>color:</h6>
                                        <div className="form-check">
                                            <MyRadioButton name="color" value="white">
                                                <span className="custom-control-label">White</span>
                                            </MyRadioButton>
                                            <MyRadioButton name="color" value="black">
                                                <span className="custom-control-label">Black</span>
                                            </MyRadioButton>
                                            <MyRadioButton name="color" value="gold">
                                                <span className="custom-control-label">Gold</span>
                                            </MyRadioButton>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="save-back">
                            <Link to="/" className="btn back">Back</Link>
                            <button type="submit" className="btn submit">Save</button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default AddScreen;