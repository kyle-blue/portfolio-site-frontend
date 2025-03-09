import styled from '@emotion/styled'
import react from 'react'

import AwsIcon from '../assets/svg/aws.svg'
import CircleciIcon from '../assets/svg/circleci.svg'
import Css3Icon from '../assets/svg/css3.svg'
import DockerIcon from '../assets/svg/docker.svg'
import ElasticsearchIcon from '../assets/svg/elasticsearch.svg'
import GcpIcon from '../assets/svg/gcp.svg'
import GithubIcon from '../assets/svg/github.svg'
import HelmIcon from '../assets/svg/helm.svg'
import Html5Icon from '../assets/svg/html5.svg'
import JavascriptIcon from '../assets/svg/javascript.svg'
import KubernetesIcon from '../assets/svg/kubernetes.svg'
import MongodbIcon from '../assets/svg/mongodb.svg'
import MysqlIcon from '../assets/svg/mysql.svg'
import NodejsIcon from '../assets/svg/nodejs.svg'
import PostgresIcon from '../assets/svg/postgres.svg'
import PythonIcon from '../assets/svg/python.svg'
import ReactIcon from '../assets/svg/react.svg'
import RustIcon from '../assets/svg/rust.svg'
import TypescriptIcon from '../assets/svg/typescript.svg'
import { Apps } from '@mui/icons-material'

function getIconByName(name: string) {
    switch (name.toLowerCase()) {
        case 'aws':
            return AwsIcon
        case 'circleci':
            return CircleciIcon
        case 'css3':
            return Css3Icon
        case 'docker':
            return DockerIcon
        case 'elasticsearch':
            return ElasticsearchIcon
        case 'gcp':
            return GcpIcon
        case 'github':
            return GithubIcon
        case 'helm':
            return HelmIcon
        case 'html5':
            return Html5Icon
        case 'javascript':
            return JavascriptIcon
        case 'kubernetes':
            return KubernetesIcon
        case 'mongodb':
            return MongodbIcon
        case 'mysql':
            return MysqlIcon
        case 'nodejs':
            return NodejsIcon
        case 'postgres':
            return PostgresIcon
        case 'python':
            return PythonIcon
        case 'react':
            return ReactIcon
        case 'rust':
            return RustIcon
        case 'typescript':
            return TypescriptIcon
        default:
            return Apps
    }
}

interface Props {
    name: string
    size: number
}

const StyledIconWrapper = styled.span`
    display: inline-flex;
    justify-content: center;
    align-items: center;
`

export default function AssetIcon({ name, size }: Props): React.ReactElement {
    const Icon = getIconByName(name)

    return (
        <StyledIconWrapper>
            <Icon style={{ height: size, margin: 0, padding: 0 }} />
        </StyledIconWrapper>
    )
}
