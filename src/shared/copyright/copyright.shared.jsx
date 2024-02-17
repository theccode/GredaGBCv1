import './copyright.styles.scss';
export const Copyright = () => {
    return (
        <>
            <small className="copyright">&copy;Copyright greda gbc, {new Date().getFullYear()}.</small>
            <br />
            <small className="copyright">All rights reserved!</small>
        </>
    )
}