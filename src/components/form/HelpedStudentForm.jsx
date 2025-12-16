import React from "react";
import Form from './Form';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Input from './Input';
import DropDown from './DropDown';
import FormButton from "./FormButton";
import { useParams } from "react-router-dom";
import { postAddHelpedStudent } from "./api";


function HelpedStudentForm() {
    const {_id} = useParams();
   const validationSchema = Yup.object({
            helpedStudentName: Yup.string()
                .min(2, 'Must be 2 characters')
                .required('Required'),
            helpedStudentClass: Yup.string().oneOf(
                ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '12th pass', "Don't Study in School"],
                'Invalid class'
            )
                .required('Required'),
        })

    const formik = useFormik({
        initialValues: {
            helpedStudentName: '',
            helpedStudentClass: 'default',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            postAddHelpedStudent(_id, values)
            .then((response) => {
                console.log('Successfully submitted helped student', response);
            })
            .catch((error) => {
                console.error('Error submitting helped student', error);
            });
        },
    });
return(<div className="bg-[#D9E4DD]  min-h-screen w-screen flex justify-center py-15 overflow-auto px-10">
        <Form onSubmit={formik.handleSubmit}>
          <h1 className="text-3xl font-bold self-start text-green-800 mb-6 border-b border-gray-300 w-full bg-[#D9E4DD] py-4 pl-8">
            Edit Product
          </h1>
          <div
            className="bg-[#D9E4DD]
     inline-flex 
     w-screen
     flex-col
     md:w-[500px]
     lg:w-[600px]
     gap-6
     items-center
     px-8"
          >
        <Input
                type="text"
                touched={formik.touched.helpedStudentName}
                errors={formik.errors.helpedStudentName}
                id="helpedStudentName"
                name="helpedStudentName"
                value={formik.values.helpedStudentName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder=" "
            >
                Helped Student Name
            </Input>
                <DropDown
                    name="helpedStudentClass"
                    label="Helped Student Class"
                    useFor="form"
                    touched={formik.touched.helpedStudentClass}
                    errors={formik.errors.helpedStudentClass}
                    value={formik.values.helpedStudentClass}
                    onChange={formik.handleChange}
                >
                       <option
                disabled
                className=" disabled:text-gray-200 bg-green-900"
                value="default"
              >
                In Which Class Helped Student Study?
              </option>
                    <option className="bg-green-900" value="1">
                    1
                    </option>
                    <option className="bg-green-900" value="2">
                    2
                    </option>
                    <option className="bg-green-900" value="3">
                    3
                    </option>
                    <option className="bg-green-900" value="4">
                    4
                    </option>
                    <option className="bg-green-900" value="5">
                    5
                    </option>
                    <option className="bg-green-900" value="6">
                    6
                    </option>
                    <option className="bg-green-900" value="7">
                    7
                    </option>
                    <option className="bg-green-900" value="8">
                    8
                    </option>
                    <option className="bg-green-900" value="9">
                    9
                    </option>
                    <option className="bg-green-900" value="10">
                    10
                    </option>
                    <option className="bg-green-900" value="11">
                    11
                    </option>
                    <option className="bg-green-900" value="12">
                    12
                    </option>
                    <option className="bg-green-900" value="12th pass">
                    12th pass
                    </option>
                    <option className="bg-green-900" value="Don't Study in School">
                    Don't Study in School
                    </option>
                </DropDown>
                <FormButton formik={formik}>Submit</FormButton>
    </div>
        </Form>
</div>)
};

export default HelpedStudentForm;