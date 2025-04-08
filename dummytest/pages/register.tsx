import { useState, FormEvent } from 'react';

const RegisterForm = () => {
  const [name, setname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>('');

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    
    const response = await fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          name,
          email,
          password,
          password_confirmation: passwordConfirmation,
        },
      }),
    });

    const data = await response.json();

    if (response.ok) {
      alert('User created successfully');
    } else {
      alert('Error: ' + data.error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setname(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={passwordConfirmation}
        onChange={(e) => setPasswordConfirmation(e.target.value)}
        required
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
