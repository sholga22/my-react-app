import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';

export function ReadEntity() {

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log('useEffect вызван');

        fetch('http://localhost:3001/teachers')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Ошибка загрузки данных');
                }
                return response.json();
            })
            .then(json => setData(json))
            .catch(err => setError(err.message));
    }, []);

    if (error) return <div>Ошибка: {error}</div>;

    return (
        <div>
            <h2>Данные из db.json:</h2>
            <ul>
                {Array.isArray(data) && data.map(item => (
                    <li key={item.id}>
                        ID: {item.id}, Name: {item.name}
                    </li>
                ))}
            </ul>

        </div>
    );
}


