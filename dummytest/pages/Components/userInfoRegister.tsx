import React, { useState, FormEvent } from 'react';
import { useRouter } from 'next/router';

type Gender = "男性" | "女性";

const UserInfoRegister: React.FC = () => {
    const [name_kana, setName_kana] = useState<string>('');
    const [gender, setGender] = useState<Gender | "">("");
    const [birthday, setbirthday] = useState<string>('');
    const [grade, setgrade] = useState<string>('');
    const [expected_graduation_year, setexpected_graduation_year] = useState<string>('');
    const [address, setaddress] = useState<string>("");
    const [education, seteducation] = useState<string>('');
    const [student_experience, setstudent_experience] = useState<string>('');
    const [strengths_weaknesses, setstrengths_weaknesses] = useState<string>('');
    const [future_goals, setfuture_goals] = useState<string>("");
    const [programming_experience, setprogramming_experience] = useState<string>('');
    const [certifications, setcertifications] = useState<string>('');
    const [desired_positions, setdesired_positions] = useState<string>('');

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
  
        const response = await fetch('http://localhost:3000/userinfo', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            user: {
                name_kana, gender, birthday, grade, expected_graduation_year,
                address, education, student_experience, strengths_weaknesses,
                future_goals, programming_experience, certifications, desired_positions
            },
            }),
        })
        const data = await response.json();
    };
    return (
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="ふりがな"
            value={name_kana}
            onChange={(e) => setName_kana(e.target.value)}
            required
        />
        <input
            type="radio"
            placeholder="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value as Gender)}
            required
        />
        <input
            type="date"
            placeholder="birthday"
            value={birthday}
            onChange={(e) => setbirthday(e.target.value)}
            required
        />
        <input
            type="radio"
            placeholder="grade"
            value={grade}
            onChange={(e) => setgrade(e.target.value)}
            required
        />
        <input
            type="radio"
            placeholder="expected_graduation_year"
            value={expected_graduation_year}
            onChange={(e) => setexpected_graduation_year(e.target.value)}
            required
         />
        <input
            type="text"
            placeholder=""
            value={address}
            onChange={(e) => setaddress(e.target.value)}
            required
        />
        <input
            type="text"
            placeholder=""
            value={education}
            onChange={(e) => seteducation(e.target.value)}
            required
        />
        <input
            type="text"
            placeholder=""
            value={student_experience}
            onChange={(e) => setstudent_experience(e.target.value)}
            required
        />
            <input
            type="text"
            placeholder=""
            value={strengths_weaknesses}
            onChange={(e) => setstrengths_weaknesses(e.target.value)}
            required
        />
        <input
            type="text"
            placeholder=""
            value={future_goals}
            onChange={(e) => setfuture_goals(e.target.value)}
            required
        />
        <input
            type="text"
            placeholder=""
            value={programming_experience}
            onChange={(e) => setprogramming_experience(e.target.value)}
            required
        />
        <input
            type="text"
            placeholder=""
            value={certifications}
            onChange={(e) => setcertifications(e.target.value)}
            required
        />
        <input
            type="text"
            placeholder=""
            value={desired_positions}
            onChange={(e) => setdesired_positions(e.target.value)}
            required
        />
        <button type="submit">Register</button>

    )
}

export default UserInfoRegister;