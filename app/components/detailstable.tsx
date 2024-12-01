import { DataField } from "../types/apitypes";

const DetailsTable: React.FC<{fields: DataField[]}> = (fields) => {

    const COLUMNS_PER_ROW = 2;
    
    const rows = [];
    for (let i = 0; i < fields.fields.length; i += COLUMNS_PER_ROW) {
        rows.push(fields.fields.slice(i, i + COLUMNS_PER_ROW));
    }

    return (
        <table className="w-full">
            <tbody>
                {rows.map((row, index) => (
                    <tr key={index}>
                        {row.map((field: DataField, index) => {
                            return (
                                <td key={index} className="py-[8px]">
                                    <p className="text-[14px]">
                                        {field.label} <span className="font-bold">{field.value}</span>
                                    </p>
                                </td>
                            )
                        })}
                    </tr>
                ))}
            </tbody>
        </table>
    )

}

export default DetailsTable;