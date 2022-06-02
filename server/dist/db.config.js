import { DataSource } from "typeorm";
import { __dbHost__, __dbName__, __dbPassword__, __dbPort__, __dbSync__, __dbUser__, __isProd__, } from "./constants";
import { Persons } from "./Entities/Person";
import { Pacients } from "./Entities/Pacient";
import { Consultations } from "./Entities/Consultation";
import { Roles } from "./Entities/Rol";
import { Usuarios } from "./Entities/User";
import { Files } from "./Entities/File";
export const dataSource = new DataSource({
    type: "postgres",
    username: __dbUser__,
    password: __dbPassword__,
    port: Number(__dbPort__),
    host: __dbHost__,
    database: __dbName__,
    entities: [Roles, Persons, Usuarios, Pacients, Consultations, Files],
    synchronize: __dbSync__,
    ssl: !__isProd__,
});
export const connectDB = async () => {
    dataSource
        .initialize()
        .then(() => {
        console.log("Conectado a la base de datos");
    })
        .catch((err) => {
        console.error(err);
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGIuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2RiLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBRXJDLE9BQU8sRUFDTCxVQUFVLEVBQ1YsVUFBVSxFQUNWLGNBQWMsRUFDZCxVQUFVLEVBQ1YsVUFBVSxFQUNWLFVBQVUsRUFDVixVQUFVLEdBQ1gsTUFBTSxhQUFhLENBQUM7QUFDckIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDeEQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFeEMsTUFBTSxDQUFDLE1BQU0sVUFBVSxHQUFHLElBQUksVUFBVSxDQUFDO0lBQ3ZDLElBQUksRUFBRSxVQUFVO0lBQ2hCLFFBQVEsRUFBRSxVQUFVO0lBQ3BCLFFBQVEsRUFBRSxjQUFjO0lBQ3hCLElBQUksRUFBRSxNQUFNLENBQUMsVUFBVSxDQUFDO0lBQ3hCLElBQUksRUFBRSxVQUFVO0lBQ2hCLFFBQVEsRUFBRSxVQUFVO0lBQ3BCLFFBQVEsRUFBRSxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsS0FBSyxDQUFDO0lBQ3BFLFdBQVcsRUFBRSxVQUFVO0lBQ3ZCLEdBQUcsRUFBRSxDQUFDLFVBQVU7Q0FDakIsQ0FBQyxDQUFDO0FBRUgsTUFBTSxDQUFDLE1BQU0sU0FBUyxHQUFHLEtBQUssSUFBSSxFQUFFO0lBQ2xDLFVBQVU7U0FDUCxVQUFVLEVBQUU7U0FDWixJQUFJLENBQUMsR0FBRyxFQUFFO1FBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0lBQzlDLENBQUMsQ0FBQztTQUNELEtBQUssQ0FBQyxDQUFDLEdBQVEsRUFBRSxFQUFFO1FBQ2xCLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDckIsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMifQ==