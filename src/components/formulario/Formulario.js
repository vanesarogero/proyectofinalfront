import { Form, FormGroup, Label, Col, FormText, Button, Input, Card, CardImg, CardImgOverlay,CardTitle,CardText } from 'reactstrap'

import contacto4 from './contacto4.jpg'




function Formulario() {

  const divStyle = {
    padding: '30px',
  };


  return (

    <nav>
    <div>
      <Card inverse>
        <CardImg
          alt="Card image cap"
          src={contacto4}
          style={{
            height: 270
            
          }}
          width="100%"
        />
        <CardImgOverlay>
          <CardTitle tag="h5">
            Formulario de Contacto
          </CardTitle>
          <CardText>
            Para nosotros lo primero son nuestros clientes
          </CardText>
          <CardText>
            <small className="text-muted">
              Dínos como podemos ayudarte, lo haremos encantados
            </small>
          </CardText>
        </CardImgOverlay>
      </Card>

  
      </div>
      <div></div>
              <Form style={divStyle} >
          <FormGroup row>
            <Label
              for="exampleEmail"
              sm={2}
            >
              E-mail
            </Label>
            <Col sm={8}>
              <Input
                id="exampleEmail"
                name="email"
                placeholder="E-mail"
                type="email"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label
              for="examplePassword"
              sm={2}
            >
              Nombre
            </Label>
            <Col sm={8}>
              <Input
                id="examplePassword"
                name="password"
                placeholder="Nombre completo"
                type="password"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label
              for="exampleSelect"
              sm={2}
            >
              Select
            </Label>
            <Col sm={8}>
              <Input
                id="exampleSelect"
                name="select"
                type="select"
              >

                <option>
                  Problemas con la compra
                </option>
                <option>
                  Cambios o devoluciones
                </option>
                <option>
                  Sugerencia
                </option>
                <option>
                  Queja
                </option>
                <option>
                  Otros
                </option>
              </Input>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label
              for="exampleSelectMulti"
              sm={2}
            >

            </Label>

          </FormGroup>
          <FormGroup row>
            <Label
              for="exampleText"
              sm={2}
            >
              Como podemos ayudarte
            </Label>
            <Col sm={8}>
              <Input
                id="exampleText"
                name="text"
                type="textarea"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label
              for="exampleFile"
              sm={2}
            >
              Archivo
            </Label>
            <Col sm={8}>
              <Input
                id="exampleFile"
                name="file"
                type="file"
              />
              <FormText>
                */*This is some placeholder block-level help text for the above input. It‘s a bit lighter and easily wraps to a new line.*/
              </FormText>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label
              for="checkbox2"
              sm={2}
            >
              Noticias
            </Label>
            <Col
              sm={{
                size: 10
              }}
            >
              <FormGroup check>
                <Input
                  id="checkbox2"
                  type="checkbox"
                />
                {' '}
                <Label check>
                  Deseo que usen mis datos para poder enviarme todas las novedades.
                </Label>
              </FormGroup>
            </Col>
          </FormGroup>
          <FormGroup
            check
            row
          >
            <Col
              sm={{
                offset: 2,
                size: 10
              }}
            >
              <Button>
                Enviar
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </nav>












      );



}



      export default Formulario;
/*<Form>
  <FormGroup row>
    <Label
      for="exampleEmail"
      sm={2}
    >
      Email
    </Label>
    <Col sm={10}>
      <Input
        id="exampleEmail"
        name="email"
        placeholder="with a placeholder"
        type="email"
      />
    </Col>
  </FormGroup>
  <FormGroup row>
    <Label
      for="examplePassword"
      sm={2}
    >
      Password
    </Label>
    <Col sm={10}>
      <Input
        id="examplePassword"
        name="password"
        placeholder="password placeholder"
        type="password"
      />
    </Col>
  </FormGroup>
  <FormGroup row>
    <Label
      for="exampleSelect"
      sm={2}
    >
      Select
    </Label>
    <Col sm={10}>
      <Input
        id="exampleSelect"
        name="select"
        type="select"
      >
        <option>
          1
        </option>
        <option>
          2
        </option>
        <option>
          3
        </option>
        <option>
          4
        </option>
        <option>
          5
        </option>
      </Input>
    </Col>
  </FormGroup>
  <FormGroup row>
    <Label
      for="exampleSelectMulti"
      sm={2}
    >
      Select Multiple
    </Label>
    <Col sm={10}>
      <Input
        id="exampleSelectMulti"
        multiple
        name="selectMulti"
        type="select"
      >
        <option>
          1
        </option>
        <option>
          2
        </option>
        <option>
          3
        </option>
        <option>
          4
        </option>
        <option>
          5
        </option>
      </Input>
    </Col>
  </FormGroup>
  <FormGroup row>
    <Label
      for="exampleText"
      sm={2}
    >
      Text Area
    </Label>
    <Col sm={10}>
      <Input
        id="exampleText"
        name="text"
        type="textarea"
      />
    </Col>
  </FormGroup>
  <FormGroup row>
    <Label
      for="exampleFile"
      sm={2}
    >
      File
    </Label>
    <Col sm={10}>
      <Input
        id="exampleFile"
        name="file"
        type="file"
      />
      <FormText>
        This is some placeholder block-level help text for the above input. It‘s a bit lighter and easily wraps to a new line.
      </FormText>
    </Col>
  </FormGroup>
  <FormGroup
    row
    tag="fieldset"
  >
    <legend className="col-form-label col-sm-2">
      Radio Buttons
    </legend>
    <Col sm={10}>
      <FormGroup check>
        <Input
          name="radio2"
          type="radio"
        />
        {' '}
        <Label check>
          Option one is this and that—be sure to include why it‘s great
        </Label>
      </FormGroup>
      <FormGroup check>
        <Input
          name="radio2"
          type="radio"
        />
        {' '}
        <Label check>
          Option two can be something else and selecting it will deselect option one
        </Label>
      </FormGroup>
      <FormGroup
        check
        disabled
      >
        <Input
          disabled
          name="radio2"
          type="radio"
        />
        {' '}
        <Label check>
          Option three is disabled
        </Label>
      </FormGroup>
    </Col>
  </FormGroup>
  <FormGroup row>
    <Label
      for="checkbox2"
      sm={2}
    >
      Checkbox
    </Label>
    <Col
      sm={{
        size: 10
      }}
    >
      <FormGroup check>
        <Input
          id="checkbox2"
          type="checkbox"
        />
        {' '}
        <Label check>
          Check me out
        </Label>
      </FormGroup>
    </Col>
  </FormGroup>
  <FormGroup
    check
    row
  >
    <Col
      sm={{
        offset: 2,
        size: 10
      }}
    >
      <Button>
        Submit
      </Button>
    </Col>
  </FormGroup>
</Form>*/