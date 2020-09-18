import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'antd';
import { useHistory } from 'react-router-dom';

import clubsApi from 'api/ClubsApi';

import styles from './Clubs.module.scss';

const { Meta } = Card;

const ClubsPage = () => {
  const [clubs, setClubs] = useState([]);
  const history = useHistory();

  const getClubs = async () => {
    const response = await clubsApi
      .getAll();
    setClubs(response.data.clubs || []);
  };
  useEffect(() => {
    getClubs();
  }, []);
  const onClubClick = (club) => {
    history.push(`/clubs/${club.id}`);
  };

  const getDescription = (item) => (
    <div>
      <div>
        inst: www.instagram.com
      </div>
      city:
      {item?.address?.city}
    </div>
  );

  // eslint-disable-next-line max-len
  const getSrc = () => 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQDxAQEBIQDxUPEA8VDxAPDxAPFQ8WFREWGBUVFRUYHSggGBolHRUVITEhJSkrLjIuFx8zODMuNygtLisBCgoKDg0OFxAQFysdHR0tLS0tLS0tKy0tLSsrKysuLSstLS0tLSstKy0rLS0rLS0tLS4vLS83Ny0tLzgtNys3K//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAABAgADBAUHCAb/xABKEAACAgECBAMFAwUKDQUAAAABAgADEQQSBRMhMQYHQSJRYXGBFDKRQlKhscEjNXJ1krKztNHwFSQlM2Jjc3SCg6LD4Qg0U8Lx/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAjEQEBAQACAgICAgMAAAAAAAAAARECEiFBAzFRYQQTMnGR/9oADAMBAAIRAxEAPwD5YNLFaYwMsVpl6dZKtHDTGVpYGmcVkho4aYwaMGkxdZIeNvmMGjBpMXWQHh3zHDRg0mLq/fJvlG6HdGGr98m+UbpN0YLt8heU7oN0C4vFLyvdFLS4mrC0UtELRS0YactEJilohaXE0WaVs0jNK2aXEBjKmMZjKmM0yVzKWMdjKmM0JmCDMkMssNHBlGY4aTGl4aOGmOGjhpMVkBo4aY4aENAyQ0YNMcNGDSYurw0bdMcNGDSYauDQ7pTuh3Qurd0OZTuk3yC3Mm6Vb4N0ot3QFpUWgLQmrC0UtKy0UvGCwtELRC0QtLiactK2MBaVlpcQS0rYwFohaURjK2MjNKyZWRzJEzJKMnMYNKd0YNGKuDRg8oDRg0KvDRg8x90O6TBk74weYwaEPJgyQ0O+Y2+HfGDJDw75jb5N8mLrJ3yb5j75N8YayN8G+Ub4N8YayN8BeUb4peMNXl4C8o3yJliFUFiSAFUFiSewAHcyosLxWebHh/A7btPdqFUlahhANo3lWHMJJPRVXcT8QB75py0ksu56FjPELRC0UtN4mmLRC0UtFJjASYhMBMQmENuhleYIRkboQ0p3Rg0qrswhpUGhzAuDSBpVmHMC3dDulO6HdCrt0m6VZkv1XJCOFLMxs2neFFZULtO3ad2CwPcdhIluMrlN7XTOzO/aQxrI7hwMlCPc2JXumjoO0qVypX7pBIK9O4I7GbvQaoWZV+WH2nY7iz91b2cI21u569QNx9Mt97OpOQl5N82COFYquQFt0YQishmR9gZbGVQOpV8hj17fCZOmABHTpVeyhc9jWzFSPccin2u53vnOQBLyxqeWpCMSBtbJYL2P3j2X5/CWjRW//G+Pztvsn4huxHxBm2d9qhiSeQqIw655tVjOjfwTy61J9OZKFsJe9emaWNdbbEBGKL0X2sZPWusjPbpjE5f22/UdZ8c91jjhN3X2QpXO5WdVIAxknPQYyPXPwllHA7XIBNa5ZR1JYkHad4wMYw2cEg9JlcG1LPWxdmdnayvcxLE7zp1BJPU/f/RN7SwHUDohrZCepKGm1iCfmyjP+iPdOXyfP8nHl1kdOPxcbx1qKfC2RuNtmPeNPgfyuYf1TY8J4XpaL0cagNYu8KjanTddyMp9gDdnBPr7povFGlzssFa+wMW3BqssTtRFZB7XshMbj+cPhNBuk4/H8nzfHt+S+fxInLlx4csnH6/261xXW6YUK+qxbUbExtD3JY3tFQdh2suQT7Xs7gPUCfGcS4vw4q/I0RLsfv3vYiDt2rrt6fIbR8Jh8I8SNp9O2nNaXo9mTXZ2NbI4sQHrtO7YwODg7jjrNG5GTt3Yz7O4gtj0yQACfoI/i/w/6tltvn8+P+M/L8vf0e6zcxOFXP5KAgD5ZJP6ZWTFJgJnvcBJikwZikwCTFJgJgJhBzBFzJAfMIaU5jgwLQYQZXmMDKurAYcysGHMgtYqoUu4TcCQNljEgEjphdvcHuw/VEGsp99x/wCVWv8A3DF1YzQf9Xam34B1fcPqUrP0PvM1slrFt1tDraf9cP8Agrb/AO4lGovN2EqQsqEkYTdYSyqGLYJ29vujp2zkjMOioG3mOA2TitWzhsH2nI9VB6Adid2fulTltqGI2lm2jsoOFHwCjoB8AI80ktJw3QdcXVOpe2lEDh6mw28Oyg4yQeX1II6+ss4Ow23KQllT8vmK7NWXwLNmOhA7tnoSM5XqItKnFnLHtcshAOhO5lVsfHYzn4Yz6QpUUpCtgNzWLKLK2P3AFOFY9sMOuMbuncyWGecbBtQCj4cO5q0/UhwXbTs7vYemMMAD3z164l7cUQgsikLW9OAawrO53tliHIwRTWM9e2AOpaarSLlsfnJco+b1Oo/SwiaY5quH+jW4+jhP+7M8p5jcbNuIBsbUZg5s5g7bmflthSM9jXnt2J6RtO1wZ7QisbXLmttwKMHYgkZGBncACevXvLLeNqT91z17naPd6g5P7cfHIot4zls7CQAyqpsIwGx8D7j+PzzrpPwduR6KtRTlEwACrB/YIJBGCCRkElQMHGdvwMu1P2vBDuK1yKugCgb2VQoIGfd3OcA+/rgHi7nd7NXtursCrEblUAEDPTGMj3E/AYU8XuxjmH8F+PXt0Jz3GI6z7w3ky+ILc1bs99lqqyjaWcqW37T7OcAj349/zOnJlrapyCpYkEkkdgSTk9vTJJx2yZQTNSYefZsxSYCYCYBJgJgJikypokwEwExSZASYpMXMBMBsyRN0EA56xgZUGlghNWgxgZSDHBhVgMYRBGBgWqVKlXUsNyt7LhOqqwGehyPbPukUIM7aqh8WD2/9NjMv6JXCIwyHdyxJYlie5Jz6YH6MD6QQSQoySSSjI0H+ep/2tX89ZTw8dLFPc0n/AKWSw/0ZgViCCO4ORLTeMswrrBYONwN2RvUhsAvt7MR29ZizbBVBJmSbNSSCAwaMBkghNSKTIYDGGpmKTAYpjE1C0UmQmIZMNEmKTJFMYnYcyRJIxdgyxTKY4MqLoymViMDIsXAwgysGODCnEIigxsyq7p5Z+GdDfwrS236PR3WOdRust0tNjtt1NijLMpJwAB8hOP6LhbarXJpKvZN+oZF2gDlruJdgO2FQM2P9Gdu8t+dXwbSctKbga7HGbmrOXtdyhARhkFivfuPTtPkvJXhDubuKFKyH3V0b7GQjOHtfAUjH3VByD0f39csS5r7zWeDOHJRZt0GiylL4Y6ShmyEOCWK5J9c955uqPsr8h+qekOGcYt1HD2vapnW+vUWVtW9WBU7OagQzD2hXsBxkZBxmca8qNOlnFNIlipYpS7KuodTjTuRkH4gRDj7fLSTs3jTjOj4eGQaSprdU9nJZdLpnGmrqZKmYqxXJyLHUdmPQkDJHwXizjmgv02mo0Omu05oZzZZfXpw924d2et2LMWyTnHeXVl30+Wic5c7dy5924Z/Ceif8FaFeErdqNPTy00CWXslNYdlWgM+GAzkgHsc9ZX4H8SaXitF+nTSrSmnFavpnSp6jXYHCYUDbj2GBXHTHrGp2efMxWYDqSB8T0m78ZcJGl4lq9JSOldyilSc9La0sRM+4cwL7+k7Fdo+G8C0PO5FeoZBWj2BKrL73YgElm7LnJxnAHYekatrgK2A9iD8iDITPQXh+7h/HtJY76JVWu1qiLK6w6ty0bdXanVThx1BBnBeL6T7PqdRRkt9n1F9QY4ywrtZAxx6kLn6xpLrGJlZMhMQtKCWilopMUtIGJiFopMUmNQ+6AnMrJkzJqYaSLmSNDCMJUDHBlIuUxhKwY4MKsBjAyoRgYaWgxgZUDGBgeiPLC3ZwDTuPyE1rDHw1Nx/ZNX4psHBfDtOirIW2ypdMpXod9ik6iwY7d7CD6MyzdeUX7yaP56r+t2zk/m1x/wC18SdFOatEDTXg5BfOb2/lAJ/ygfWT2xJ5dd8HLjgGk/i2s/jTn9s415U2svE9KyLvYVX7FJ2hj9mfALYOB7zg/InAPavC37xaP+KtN/VFnF/Jv99tF/Au/qzwT6reec+h5FnDl3cxmp1Rtsxt5jA0KDj0AAAA64A7k5J5zunUPP8A/wDccO/2Os/n0TlZMsa4/T0P4xXneHbncnP2Cu0lTsy61q4yFwNuR1HbHSfN+QWkbZxDUZXa9mmpA67g1SO7E9MYxqEx17hug6Z+0tpps4ItepflVW8PrrttyBylelV35PQYznJ6DHXpNZ4N8H6jhensVNbXZutNpV9Mq0bdqgk4bmByqAbt5UdPZOOsY9OQ+ZmoWzjPEGQ7xza06AnLVaeqt1x6kOjr9J9rwXyz0GgoGr4xYgYKGanfyqq+2E9j27n9MA4OcbT3PMdfrz9vu1OUt/x6279yYlLD9pNn7mxAyp9DgdCDPRXiLQjjHDSmk1PKGoVGrvrywZc+0jBSCVZdykZ9Tn1EVb6azwn450Ftb1aWm2lKLNlVFGjtsYptBFvKoRuUhYsAWx905wcicS8cUWV8S1nNreo3ai+5FsADGu212RiAemR6HrO5eXHhvT8Orv06XVanUo6tq7ERVaveo2VdyVUBM7Se5J6bpxPzL11t3FtZzsbqbXqQAbf3JHY1Z952sDn4xCfb5stELRS0UtGtGJiEwExSZLQSYIpMBMiCTBmAwSaG3SRMySaLRLBK5Ys7IcRxFWWCFQCMBCBOx+G/Lzh1vC9PrdQbwX0i3XlbcAexuYgbT8eklXccdAjAToXmn4Jo4auls03M2WtalvNfed4CtXt6D0Fv4CJ5WeDKeJHVNqeZy6eStZrcJl23Fweh7AJ/LjTfGuetQpOSqn4lQZYFx0907N4n8t+H0cO1WroN5arS221E3BlJWsspIx1HacdxBLrHOnTOdq/PaI7oCMEAj3HrOr+Xvl5pdZw9dXqzaDZZcV2OKwtdbFOvQ+qOc+4ia3zT8EUcNr01um5my2yyu0WNv9rbvrx0GOiW5+kabNxzlKwv3QBnvgASESzESxwv3iFz7yBCvQHiXWVnw5YgsrLHhtYCixSc8pRjGZ5/bUOa+UXsNfT9yNj8voc/5vO3v17ToPl/5b0cU0Z1Rveoi6xMV11sPZC9cn16z4LitaU6jUUbweRqL6gWIBYV2sgJHvIAP1kjMxjGPRqrK88qy2rd97lWvXu+e0jP1imdG8qfBOl4nRqbNTzc03qicuzYMGtW69O+SZVrmLVg9wD9BIBjoOny6T6Hx9wmrQ8S1elp3cug07N7biA2nqdsn5uZ07wp5RaS3RaezWc8X21h7FSzlhN/tKm3HQhSoPxBkTZHDyYpM2XifRpp9brKK8hKNTqK03HcdqWMoyfU4E+88HeWej1Navq+JU72AJ02i1GmZqSfybHO7LdsgLgHIye8ha5eYpndx5O8KztGs1ZJOAo1OjyTnGMcnvPnvMnyy0nDOHtqqLdW7i2lNtz0MuHbByFrU5+smJ2coiwwSKkhkggSSGCQWyxZXn/zGE7srhLBKVMcGFi9TPRfhNN/h7TIfyuGY/GgiecFaehfBOi3cI0ZF1436Kv2Q6FRmvsAVOB1macmt8Vv/hHwvTqjtZ66dLex9FdMV6g9+mA10nl6z8O4BfrCqAMmr1OCW3uyrsr+ABFSY7/e+MxfJ1xq+B6jRuThefVy8rjZqKt2R0yMtZaO57R/NC0aLw5p9GM5dNJR6A4pq5jE/M1AH+HIn6fT+IaeX4c1CfmcJK/ydNieese4E/AAkn4ADuZ6L8ZdOBa0e7htv9AZxHwBw77VxTRVYJUXLa+PRaQbevwJRV/4ojXGuw8S3cP8NlHZarKeG11+8c5qgm3r3JdsfX6QeYlP27gVlyrsK006tA+CUCKLHXIz7XLNi+7J7gdZleZfh/U8Q0len0rUoeej2893QOqo2FBVG67ip9PuzZeHOEPVwyjRarlua9MKLeWzOjKFKDBZQT7GO498jLzbwzSrdfTU9iULZYivdYyqtSk+0xJ6ZAzjPc4HrO33ca4RwXSK+mFFxJCKNM9N11zY6tZZnOAO7E9MgDuBOW+X3+K8d0aXEA06nUUWMen7pybqAOvvsYD6iff+fHDbLNPpdQisyaZrhdtBOwWBCLG9yg14z6bhLWrdr7HwV4oXiWmN4r5P7q6cs2Bz7IU5zge+fO6PzR01uubQX0PVnU2adbSyW1s62mtd4wCoZgB2OMjPTJmN5Kc5uGE1WUhPtN3RqHsOcJk7haB+icw0XD7dVx16aQbGXitr2FR0rRNaWexvzVABPU+4dSRkzj67zm8GUaVKtdpK1pV7eXqKqxtTLKSliqOidVKkDoSynvnOy8h7GTR6xhVZYrasDcnL6EUV5GGYHsynt6zb+euqVeEhCet2qoVB8VJsP0wh/ETW/wDp8Y/Y9aMnA1a4GegJoTJx9B+Ag3w+Z1XDF4p4o1JKO1FV1L6ocp39miius1sqg/esrKEe7cfSdk03Hq3uvrAuIp5asfsup6WFd7KfY6ew9R6/nTSeH9PVpX4zxS0hRdqbiz5J206NTWRj370u6Dv7M1/kvxN9XpeIaq3o+o4pe5HfYDp9OVQH1CjCj5SI4n4s1AXi+stxuCcQ1D7SCCwXUs23B7ZxieifGyvq+D6saMm46nSMaTUQ3NV1z7PXruXIH8KecPHTY4nxI+7W6z+meeheB8P0/BOFs+/UWJp6Ge4u9zbioJblUuQteWJwAF7jJ9YWvPfhnh9tfEdC32a9imt0hNfJ2M2L0O0b9qgnt7RA69SBOs+cfFbbOFtW2h1WmTn6c825tEUGG6Liq5z1+UbhnnSmp1en0yaKxRqNRRSLH1KgrzbVTcUCEHG7ON3XHpNj55fvM/8AvOl/nmEed3WLiWoYWrHpmMLyUkQS1xK2kwnLUkiyQuGBwZYDKMx1adJRcpj5lIMOZpFwaejvANn+StB/ulH8wTzaDN5pPGGvprSqrV21pWoVEUV4VQMADK5iwr6XyV2Wat9PY16i3SB15Gr1Wly1TLgNyXXf7Nlh65xg47mZ/nvrhz9PpVLkUaW2xt9j2Za5sDJckkgU+v5851w7XWaaxLdO7VWV7uW6YyuUKnGc/ksw+sbifEbdTY1uosa53Ch3fGSAoUDpgAYA7SdR6U8aH/Imu/i+7+gM595DcO3ajV6sjIpqSms+9rG3uPmBXX/L+M+A1XjTiFtT0Way567EKPWeXhkIwVOFzjEp4R4o1mjRq9LqbNOruXZUFeGYqFLHcpPZVH0k6q6P5s+MtZp+ILp9LqG0616esuKtjbndnJ3FlP5Ir6fH4zP8r+NaviVOpqvufUGmxGbdqX0jbLEwg3U1biA1Vh6MO5yO041xHiNuote+92tssK77HxltqhRnHT7qqPpMjg/HtTo2dtJe+nNgUOU2ncFJIB3A9sn8Yxc8PofMrhh0fFLVVVpFgqvqWlmAr3DBKtgHPMrds+8z6ngXnTbWiprNONQVGDfVYKnfHYtWV2kn1IIHuE5pxjjmo1jq+que9kXarOEyFznHsgdMk/jNfujB6p8E+I6+JaU6mqpqF5rpscqSSoGT7PT1nxHF/OarT23016Kx3putrJa5KkcpYVZshWPXBPaca0nG9VSuynVaqhck7KdTdUuT3O1WAz0HWYVlpZmZiWZiWZmJYsSclmJ6kknJJkwxvvGHi3UcUvFuo2qtYYUU152UqxBPU9WY4XLeu0dB2nU//T0f8U1v+9p/QJOFbpteDeJ9ZoldNJqLNOtjBnCBDubGMncD6ARYX6df89/EAo0tXD6iA2rY2Xhe61K+ev8ADs/EI4mx8hx/kgn36vUE/HAQfsE4Lxbi1+rt52pte+zaq73xnavYdAAB1P4zN4T4u1+jq5Om1VtFe5m2IK8ZPc9VPukxPS3xfpzbxjXVL3t4jqa1+b6llH6537zZsA4LxDJ71Iv1a6tR+kiebBxW4an7WLDz+abedhS3MLEl8EYzkk9pseK+MuIaqpqNRq7bq3Kl62FYDbWDLnCg9CAfpGCvwX++fDv4w0P9ZrnZfPPTKeGc3aNyaigbuxwSR7uv4jv69pwbSXtVYltbFHqdHrcYyrIwZWGfcQD9JtuL+Ldfq6jTqdVbdWWVijivBK9j0UdpcS/bTCOpzEBgzLjF8mJlZEtPX9h/tiMIsONLJDJJjWqjDATIIaMrYlm7MqhmolXCGY6uRHF3vH4TUsZsq4GQmILF+I+cYWL7/wBDf2TWRnb+B3SExTYv98/tgNvz/QP1SWRZb+DSRN5+UEjflZug3RMySYGzBmLJGLpsyZiySYaMEOJNsvVOwSSYhxHU0yjpJiTHv6QEzXVzQmCSSMVAY26LIYwHd8B+AkiySYZFjqD8P0j/AMSp6yO4+o6iNmMGmusrO2KZJfkHuAf1/jIVX3fgf7Y6L/Z+mORJLCg+MyLKkXpjdj3k9fwicKt+SRhRgpPYZ+Pp+Mv3D0UD5AZ/HGYC3985jod/0Tl+/pDiEyCXqnYMSQ4gjF1JJJIxdHEmJMRpZxZvIuJMR+kmPn+MvVnsSMIwA+EJx8Zrqz3L/fpAYTj4wdPj+EYQhkzHxBM43KWQxsQERi6WEQ4kjqamPlJJJGQKYRJiGMTTGBj1Mg7iRu5+ZlxmBL26qG/H6f3Mx5dp2/JP5Xb5y8U5zxsVkSRnXBIix1WXYMBMMBEuEIZMRsQYmcb0MRsSSSyJaIkkhlxjREIigRszUjNqQQSQqYkxGxDj/wDZeqdi7ZMCSAmMXyhYSdP79IskjWHxARFAkgTp/fMkkkKLQSSTCCsjf2fzRJJL6PYQr3HzH64ZJIVfqvvGY8Mk6cvtz4f4wJIZJlsD+2D0kkhRSESSRENFkkmkMewkkklZhTHHb6/2QSSz7KZfX5ftgt7L9f1ySS+mZ9kH7Iskkzfp0SQSSSKMAkkiBpJJIV//2Q==';

  console.log(clubs);

  return (
    <div className={styles.clubsWrapper}>
      <h3>Clubs Gallery</h3>
      <div className="site-card-wrapper">
        {
          clubs.map((club, index) => {
            if (index % 4 === 0) {
              return (
                <Row gutter={24}>
                  <Col
                    style={{ marginBottom: 20 }}
                    span={6}
                    xs={12}
                    sm={12}
                    md={12}
                    lg={8}
                    xl={6}
                  >
                    <Card
                      bordered
                      hoverable
                      style={{ width: 340, margin: '0 auto' }}
                      onClick={() => onClubClick(club)}
                      cover={(
                        <img
                          alt="example"
                          src={getSrc()}
                        />
                      )}
                    >
                      <Meta
                        title={clubs[index].name}
                        description={getDescription(clubs[index])}
                      />
                    </Card>
                  </Col>
                  {index + 1 <= clubs.length && (
                  <Col
                    style={{ marginBottom: 20 }}
                    span={6}
                    xs={12}
                    sm={12}
                    md={12}
                    lg={8}
                    xl={6}
                  >
                    <Card
                      hoverable
                      style={{ width: 340, margin: '0 auto' }}
                      onClick={() => onClubClick(club)}
                      cover={(
                        <img
                          alt="example"
                          src={getSrc()}
                        />
                      )}
                    >
                      <Meta
                        title={clubs[index + 1]?.name}
                        description={getDescription(clubs[index + 1])}
                      />
                    </Card>
                  </Col>
                  )}
                  {index + 2 < clubs.length && (
                  <Col
                    style={{ marginBottom: 20 }}
                    span={6}
                    xs={12}
                    sm={12}
                    md={12}
                    lg={8}
                    xl={6}
                  >
                    <Card
                      hoverable
                      style={{ width: 340, margin: '0 auto' }}
                      onClick={() => onClubClick(club)}
                      cover={(
                        <img
                          alt="example"
                          src={getSrc()}
                        />
                      )}
                    >
                      <Meta
                        title={clubs[index + 2].name}
                        description={getDescription(clubs[index + 2])}
                      />
                    </Card>
                  </Col>
                  )}
                  {index + 3 < clubs.length && (
                    <Col
                      style={{ marginBottom: 20 }}
                      span={6}
                      xs={12}
                      sm={12}
                      md={12}
                      lg={8}
                      xl={6}
                    >
                      <Card
                        hoverable
                        style={{ width: 340, margin: '0 auto' }}
                        onClick={() => onClubClick(club)}
                        cover={(
                          <img
                            alt="example"
                            src={getSrc()}
                          />
                        )}
                      >
                        <Meta
                          title={clubs[index + 3].name}
                          description={getDescription(clubs[index + 3])}
                        />
                      </Card>
                    </Col>
                  )}
                </Row>
              );
            }

            return null;
          })
        }
      </div>
    </div>
  );
};

export default ClubsPage;

// <figure className={styles.effectOscar}>
//   <img
//     src="https://i.ytimg.com/vi/GknRcni9rRM/maxresdefault.jpg"
//     alt="img09"
//   />
//   <figcaption>
//     <h2 className={styles.city}>
//       {club.address.city}
//       {' '}
//       <span className={styles.name}>{club.name}</span>
//     </h2>
//     <p>Oscar is a decent man. He used to clean porches with pleasure.</p>
//     {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
//     <a href="#">View more</a>
//   </figcaption>
// </figure>
