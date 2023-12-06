import { useFormContext, Controller } from "react-hook-form";
import Select from "react-select";
import styled from "styled-components";

export const StyledInput = (props) => {        
    return (
        <Label width={props.width}>
            <Input type={props.type} required defaultValue={props.defaultValue} disabled={props.disabled} errorDetected={props.error} {...props.register(props.name, {
                ...props.registerOptions,
                required: 'Requerido',
            })}/>
            <PlaceHolder>{props.placeholder}</PlaceHolder>
            <ErrorMsg aria-live="polite">{props.error ? props.error.message : ''}</ErrorMsg>
        </Label>
    )
};


export const StyledSelect = (props) => {    
    const { control } = useFormContext();
    
    return (
        <Label width={props.width}>
            <Controller
                control={control}
                name={props.name}
                rules={{
                    ...props.registerOptions,
                    required: 'Requerido',
                }}
                render={({ field: { onChange, value } }) => (
                    <SelectInput 
                        required
                        errorDetected={props.error}
                        classNamePrefix="Select"
                        options={props.options}
                        isSearchable={props.searchable || false}
                        value={props.options.find(c => c.value === value)}
                        onChange={(val) => onChange(val.value)}
                    />
                )}
            />
            <PlaceHolder active={true}>{props.placeholder}</PlaceHolder>
            <ErrorMsg aria-live="polite">{props.error ? props.error.message : ''}</ErrorMsg>
        </Label>
    )
};

const SelectInput = styled(Select)`
    & .Select__control {
        border: none;
        outline: none;
        background: none;
        box-shadow: 0 0 0 1px ${(props) => props.errorDetected ?  "green" : "gray"};
        border-radius: 8px;
        padding: 8px;
        color: ${({ theme }) => "gray"};
    }

    & .Select__control--is-focused {
        box-shadow: 0 0 0 2px ${({ theme }) => "gray"};
    }

    & .Select__placeholder {
        color: ${({ theme }) => "gray"};
    }
`;

const Label = styled.label`
    position: relative;
    font-size: 18px;
    padding-top: 10px;
    width: ${(props) => props.width || '100%'};
`;

const PlaceHolder = styled.span`
    position: absolute;
    left: 10px;
    padding: 0 5px;
    transform: translateY(-50%);
    color: ${({theme}) => "gray"};
    transition: top 0.12s, font-size 0.12s;
    ${(props) => !props.active? 'top: calc(50% - 7px);' : 
    `top: 10px; font-size: 14px; background-color: gray;`
    }
`;

const ErrorMsg = styled.span`
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 14px;
    color: ${({ theme }) => "red"};
    height: 24px;

    &:empty {
        opacity: 0;
    }
`;

const Input = styled.input`
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    -ms-appearance: none;
    outline: none;
    background: none;
    box-shadow: 0 0 0 1px ${(props) => props.errorDetected ? "red": "gray"};
    border-radius: 8px;
    padding: 15px;
    width: 100%;
    color: ${({ theme }) => "#034e77"};

    &:disabled {
        background: ${({ theme }) => "034e77"}
    }

    &:disabled + ${PlaceHolder} {
        font-size: 14px;
        top: 0px;
    }
    
    &:focus {
        box-shadow: 0 0 0 2px ${({ theme }) => "black"};
    }

    &:valid + ${PlaceHolder} {
        font-size: 14px;
        top: 10px;
        background-color: ${({ theme }) => "#f5f7fa"};
    }

    &:focus + ${PlaceHolder} {
        color: ${({ theme }) => "#034e77"};
        font-size: 14px;
        font-weight: 700;
        top: 10px;
        background-color: ${({ theme }) => "#f5f7fa"};
    }
`;

// const SelectInput = styled(Select)`
//     & .Select__control {
//         border: none;
//         outline: none;
//         background: none;
//         // box-shadow: 0 0 0 1px ${(props) => props.errorDetected ? props.theme.colors.negative.m500 : props.theme.colors.gray.m500};
//         border-radius: 8px;
//         padding: 8px;
//         color: black;
//     }

//     & .Select__control--is-focused {
//         box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.gray.m700};
//     }

//     & .Select__placeholder {
//         color: ${({ theme }) => theme.colors.gray.m500};
//     }
// `;

// const Label = styled.label`
//     position: relative;
//     font-size: 18px;
//     padding-top: 10px;
//     width: '100%';
//     color: black;
// `;

// const PlaceHolder = styled.span`
//     position: absolute;
//     left: 10px;
//     padding: 0 5px;
//     transform: translateY(-50%);

//     transition: top 0.12s, font-size 0.12s;
// `;

// const ErrorMsg = styled.span`
//     width: 100%;
//     display: flex;
//     align-items: center;
//     font-size: 14px;
//     height: 24px;
//     color: red;

//     &:empty {
//         opacity: 0;
//     }
// `;

// const Input = styled.input`
//     appearance: none;
//     -moz-appearance: none;
//     -webkit-appearance: none;
//     -ms-appearance: none;
//     outline: none;
//     background: none;
//     border-radius: 8px;
//     padding: 15px;
//     width: 100%;
//     color: black;

// `;