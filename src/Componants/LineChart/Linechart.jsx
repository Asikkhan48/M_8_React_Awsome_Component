import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const Linechart = () => {

    const studentsData = [
        { id: 1, name: "Student 1", mathMarks: 85, physicsMarks: 78, biologyMarks: 92 },
        { id: 2, name: "Student 2", mathMarks: 72, physicsMarks: 65, biologyMarks: 85 },
        { id: 3, name: "Student 3", mathMarks: 90, physicsMarks: 88, biologyMarks: 78 },
        { id: 4, name: "Student 4", mathMarks: 68, physicsMarks: 70, biologyMarks: 80 },
        { id: 5, name: "Student 5", mathMarks: 78, physicsMarks: 82, biologyMarks: 75 },
        { id: 6, name: "Student 6", mathMarks: 95, physicsMarks: 90, biologyMarks: 88 },
        { id: 7, name: "Student 7", mathMarks: 82, physicsMarks: 75, biologyMarks: 72 },
        { id: 8, name: "Student 8", mathMarks: 70, physicsMarks: 68, biologyMarks: 65 },
        { id: 9, name: "Student 9", mathMarks: 88, physicsMarks: 85, biologyMarks: 90 },
        { id: 10, name: "Student 10", mathMarks: 75, physicsMarks: 78, biologyMarks: 84 }
      ];
      
      
    return (
        <div className='text-center '>
            <LChart width={500} height={400} data={studentsData}>
            <XAxis dataKey="name" />
            <YAxis></YAxis>
                <Line dataKey={"mathMarks"} stroke='red'></Line>
                <Line dataKey={"physicsMarks"} stroke='yellow'></Line>
                <Line dataKey={"biologyMarks"} stroke='green'></Line>
            </LChart>
        </div>
    );
};

export default Linechart;