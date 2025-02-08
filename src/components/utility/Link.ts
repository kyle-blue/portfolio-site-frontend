import { Link as DomLink } from "react-router-dom";
import styled from "@emotion/styled";
import { palette } from "../../theme";

export const Link = styled(DomLink)`
    text-decoration: none;
    color: ${palette.mainDark};

    & :visited {
        color: ${palette.mainDark};
    }
`