import { useState } from 'react';
import { api } from '../lib/api';

export default function Register() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await api.post('/login', { name, email, password });
      setMessage('ログイン成功！');
    } catch (err: any) {
      setMessage('エラー：' + err.response?.data?.errors?.join(', '));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>ユーザーログイン</h2>
      <input type="text" placeholder="名前" value={name} onChange={e => setName(e.target.value)} />
      <input type="email" placeholder="メール" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="パスワード" value={password} onChange={e => setPassword(e.target.value)} />
      <button type="submit">ログイン</button>
      <p>{message}</p>
    </form>
  );
}
