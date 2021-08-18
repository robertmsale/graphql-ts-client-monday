/**
 * @author ChenTao
 * 
 * Client-side of example of 'graphql-ts-client' 
 */

import { ChangeEvent, FC, memo, useCallback } from "react";
import { Select, MenuItem, FormControl, InputLabel, CircularProgress } from "@material-ui/core";
import { useRecoilValueLoadable } from "recoil";
import { selectDepartmentsLikeName } from "../state/DepartmentSelector";
import { department$$ } from "../generated/fetchers";

export const DepartmentSelector: FC<{
    value?: string,
    onChange: (value?: string) => void
}> = memo(({value, onChange}) => {

    const loadable = useRecoilValueLoadable(
        selectDepartmentsLikeName(
            undefined,
            department$$
        )
    );

    const onSelectChange = useCallback((e: ChangeEvent<{value: any}>) => {
        onChange(e.target.value);
    }, [onChange]);

    return (
        <FormControl fullWidth={true}>
            <InputLabel>
                Department
                {
                    loadable.state === 'loading' ?
                    <CircularProgress size="1rem"/> :
                    undefined
                }
            </InputLabel>
            <Select 
            disabled={loadable.state !== 'hasValue'} 
            error={loadable.state === 'hasError'}
            value={value}
            onChange={onSelectChange}
            fullWidth={true}>
                {
                    [
                        <MenuItem key="None" value={undefined}>
                            <em>Unspecified</em>
                        </MenuItem>,
                        ...(
                            loadable.state === 'hasValue' ?
                            loadable.getValue().map(department => {
                                return (
                                    <MenuItem key={department.id} value={department.id}>
                                        {department.name}
                                    </MenuItem>
                                ); 
                            }) :
                            []
                        )
                    ]
                }
            </Select>
        </FormControl>
    );
});