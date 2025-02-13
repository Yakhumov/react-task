import { useGetUserIdQuery}  from "../../../shared/api/rtkApi"; 

export const Profile = ({ userId }: { userId?: string }) => {
 
  const { data, isLoading, error } = useGetUserIdQuery(userId || '' )  

  if (!userId) return <p >Не указан ID пользователя.</p>;

  if (isLoading) return <p>Загрузка...</p>;

  if (error) return <p >Ошибка при загрузке данных пользователя</p>;
  return (
    <div className="user-info"> 
      {data ? (
        <ul>
          <li><strong>Имя:</strong> {data.name}</li>
          <li><strong>Email:</strong> {data.email}</li>
          <li><strong>Телефон:</strong> {data.phone}</li>
        </ul>
      ) : (
        <p>Пользователь не найден.</p>
      )}
    </div>
  );
};
