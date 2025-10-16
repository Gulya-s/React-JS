import React from "react";
import { useFormik} from "formik";
import * as Yup from "yup";
import { useNavigate} from "react-router-dom";

export default function AddBook(){
    const navigate = useNavigate();
    const formik = useFormik({ initialValues: {title: "", author: "", genere: 'fiction', rating: ""},
    validationSchema: Yup.object({ title: Yup.string().min(2,'Минимум 2 символ').required("Обязательно"),
        author: Yup.string().required("Обязательно"),
        genre: Yup.string().oneOf(['fiction', 'nonfiction', "tech"]),
        rating: Yup.number().min(0).max(5).required()
    }),
    onSubmit: (value) => {
        const newBook = { ...Values, id: Date.now()};
        const existing = JSON.parse(localStorage.getItem("books")) || [];
        localStorage.setItem("books", JSON.stringify([...existing, newBook]));
        navigate('/books');
    }
})
 return (
    <div>
        <h2>Add Book</h2>
        <from onSubmit={formik.handleSubmit}></from>
    </div>
 )
}

