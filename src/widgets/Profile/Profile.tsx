import { useGetUserIdQuery}  from "../../shared/api/rtkApi";

export const Profile = ({ userId }: { userId?: string }) => {
 
    const { data, isLoading, error } = useGetUserIdQuery(userId || '' )  


  if (!userId) return <p >Не указан ID пользователя.</p>;
  


  if (isLoading) return <p>Загрузка...</p>;

  if (error) return <p >Ошибка при загрузке данных пользователя</p>;

  return (
    <div className="user-info">
      {data?.name ? (
        <div>
          <h1>{data?.name}</h1>
          <p>Email: {data?.email}</p>
          <p>Телефон: {data?.phone}</p>
        </div>
      ) : (
        <p>Пользователь не найден.</p>
      )}
    </div>
  );
};
