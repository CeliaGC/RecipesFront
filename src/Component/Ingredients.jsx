import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';


function CheckExample() {
  return (
    <Form>
       
      {['checkbox'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
        <Table>
        <tbody>
        <tr>
        <td>
          <Form.Check 
            type={type}
            id={`default-${type}`}
            label={`default ${type}`}/>
        </td>
        <td>
        0.75
        </td>
        <td>
        valor
        </td>
        </tr>
        <td>
          <Form.Check 
            type={type}
            id={`default-${type}`}
            label={`default ${type}`}/>
        </td>
        <td>
        0.75
        </td>
        <td>
        valor
        </td>
        </tbody> 
        </Table>
        </div>
      ))}
      
    </Form>
  );
}

export default CheckExample;