
import Sidebar from "@components/common/SideBar/SideBar";
import { Box, Container, Grid, Input, Text } from "@components/ui";


export default function Dashboard() {

    const rows = [
        {
          label: 'Arnaldo Coelho',
          create: 'Permitido',
          read: 'Permitido',
          update: 'Permitido',
          delete: 'Permitido',
          status: 'Offline',
          
        },
        {
          label: 'Caracas',
          create: 'Permitido',
          read: 'Permitido',
          update: 'Permitido',
          delete: 'Permitido',
          status: 'Active',
        },
        {
          label: 'Soturno',
          create: 'Permitido',
          read: 'Permitido',
          update: 'Permitido',
          delete: 'Permitido',
          status: 'Offline',
        },
        {
          label: 'Lambe lambe',
          create: 'Permitido',
          read: 'Permitido',
          update: 'Permitido',
          delete: 'Permitido',
          status: 'Offline',
        },
        {
          label: 'José Padilho',
          create: 'Permitido',
          read: 'Permitido',
          update: 'Permitido',
          delete: 'Permitido',
          status: 'Active',
        },
    ];


    const makeStyle=(status)=>{
      if(status === 'Active')
      {
        return {
          background: 'rgb(145 254 159 / 47%)',
          color: 'green',
        }
      }
      else if(status === 'Offline')
      {
        return{
          background: '#ffadad8f',
          color: 'red',
        }
      }
      else{
        return{
          background: '#59bfff',
          color: 'white',
        }
      }
    }


    return (
        <Box className="flex w-full">
          <Box className="w-full flex justify-center ">
            <Box className="h-full flex flex-col justify-center sm:py-12">
              <Container className="table bg-white bg-opacity-40 backdrop-blur-md drop-shadow-lg shadow  rounded-lg divide-y divide-gray-200">
                <Grid className="w-full table-header-group p-4 gap-4 border-b-4 border-b-rose-500">
                  <div className="table-row">
                    <Text as="h1" className="table-cell text-center p-4 gap-4 border-b-4 border-b-rose-500">User Name</Text>
                    <Text as="h1" className="table-cell text-center p-4 gap-4 border-b-4 border-b-rose-500">Create</Text>
                    <Text as="h1" className="table-cell text-left p-4 gap-4 border-b-4 border-b-rose-500">Read</Text>
                    <Text as="h1" className="table-cell text-left p-4 gap-4 border-b-4 border-b-rose-500">Update</Text>
                    <Text as="h1" className="table-cell text-left p-4 gap-4 border-b-4 border-b-rose-500">Delete</Text>
                    <Text as="h1" className="table-cell text-left p-4 gap-4 border-b-4 border-b-rose-500">Status</Text>
                  </div>
                </Grid>
                {rows.map((row) => (
                  <Grid className="w-full table-row-group hover:text-blue-400" >
                    <td className="table-cell px-28 p-4">{row.label} </td>
                    <td className="table-cell px-4 p-4">{row.create}</td>
                    <td className="table-cell px-4 p-4">{row.read}</td>
                    <td className="table-cell px-4 p-4">{row.update}</td>
                    <td className="table-cell px-4 p-4">{row.delete}</td>
                    <td className="table-cell px-4 p-4">
                      <span className='rounded-xl p-2'style={makeStyle(row.status)}>{row.status}</span>
                    </td>
                  </Grid>
                 ))}
              </Container>
            </Box>
          </Box>
        </Box>
 		       

    )
}