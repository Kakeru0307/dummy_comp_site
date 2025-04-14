import React, { useState, FormEvent } from 'react';
import { useRouter } from 'next/router';
import styles from './styles/userInfoRegister.module.css'
import './styles/global.css' 

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
    const [real_name, setreal_name] = useState<string>('');
    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
  
        const response = await fetch('http://localhost:3000/userinfo', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            user: {
                real_name, name_kana, gender, birthday, grade, expected_graduation_year,
                address, education, student_experience, strengths_weaknesses,
                future_goals, programming_experience, certifications, desired_positions
            },
            }),
        })
        const data = await response.json();

        if (response.ok) {
            alert('ユーザー登録が完了しました');
          } else {
            alert('Error: ' + data.error);
          }
    };
    return (
        <form className={styles.formContainer} onSubmit={handleSubmit}>
            <label htmlFor="real_name">本名</label>
            <input
                id="real_name"
                type="text"
                value={real_name}
                onChange={(e) => setreal_name(e.target.value)}
                required
            />
    
            <label htmlFor="name_kana">ふりがな</label>
            <input
                id="name_kana"
                type="text"
                value={name_kana}
                onChange={(e) => setName_kana(e.target.value)}
                required
            />
    
        <fieldset>
            <legend className={styles.legend}>
                性別 <span className={styles.requiredBadge}>必須</span></legend>

            <div className={styles.radioGroup}>
                <div className={styles.radiolabel}>
                    <input
                        type="radio"
                        name="gender"
                        value="男性"
                        checked={gender === "男性"}
                        onChange={(e) => setGender(e.target.value as Gender)}
                        required
                    />
                    男性
                </div>

                <div className={styles.radioOption}>
                    <input
                        type="radio"
                        name="gender"
                        value="女性"
                        checked={gender === "女性"}
                        onChange={(e) => setGender(e.target.value as Gender)}
                        required
                    />
                    女性
                </div>
            </div>
        </fieldset>

    
            <label htmlFor="birthday">生年月日</label>
            <input
                id="birthday"
                type="date"
                value={birthday}
                onChange={(e) => setbirthday(e.target.value)}
                required
            />
    
            <label htmlFor="grade">
                学年
                <select
                    id="grade"
                    value={grade}
                    onChange={(e) => setgrade(e.target.value)}
                    required
                >
                    <option value="">選択してください</option>
                    <option value="1年">大学1年生</option>
                    <option value="2年">大学2年生</option>
                    <option value="3年">大学3年生</option>
                    <option value="4年">大学4年生</option>
                </select>
            </label>

    
            <label htmlFor="expected_graduation_year">
                卒業予定年度
                <select
                    id="expected_graduation_year"
                    value={expected_graduation_year}
                    onChange={(e) => setexpected_graduation_year(e.target.value)}
                    required
                >
                    <option value="">選択してください</option>
                    <option value="1年">26卒</option>
                    <option value="2年">27卒</option>
                    <option value="3年">28卒</option>
                    <option value="4年">29卒</option>
                </select>
            </label>
    
            <label htmlFor="address">住所</label>
            <input
                id="address"
                type="text"
                value={address}
                onChange={(e) => setaddress(e.target.value)}
                required
            />
    
            <label htmlFor="education">大学名</label>
            <input
                id="education"
                type="text"
                value={education}
                onChange={(e) => seteducation(e.target.value)}
                required
            />
    
            <label htmlFor="student_experience">学生時代に力を入れたこと</label>
            <textarea
                id="student_experience"
                value={student_experience}
                onChange={(e) => setstudent_experience(e.target.value)}
                rows={4} 
                style={{ resize: 'none' }}
                required
            />
    
            <label htmlFor="strengths_weaknesses">強み・弱み</label>
            <textarea
                id="strengths_weaknesses"
                value={strengths_weaknesses}
                onChange={(e) => setstrengths_weaknesses(e.target.value)}
                rows={4} 
                style={{ resize: 'none' }}
                required
            />
    
            <label htmlFor="future_goals">この先やりたいこと</label>
            <textarea
                id="future_goals"
                value={future_goals}
                onChange={(e) => setfuture_goals(e.target.value)}
                rows={4} 
                style={{ resize: 'none' }}
                required
            />
    
            <label htmlFor="programming_experience">プログラミング経験</label>
            <input
                id="programming_experience"
                type="text"
                value={programming_experience}
                onChange={(e) => setprogramming_experience(e.target.value)}
                required
            />
    
            <label htmlFor="certifications">資格</label>
            <input
                id="certifications"
                type="text"
                value={certifications}
                onChange={(e) => setcertifications(e.target.value)}
                required
            />
    
            <label htmlFor="desired_positions">興味のある職種</label>
            <input
                id="desired_positions"
                type="text"
                value={desired_positions}
                onChange={(e) => setdesired_positions(e.target.value)}
                required
            />
    
            <button type="submit">Register</button>
        </form>
    );
    
}

export default UserInfoRegister;