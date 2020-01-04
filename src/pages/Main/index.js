import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Form, Input, SubmitButton } from './styles';

export default function Main() {
    Main.navigationOptions = {
        title: 'Usuarios',
    };
    return (
    <Container>
        <Form>
            <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Adicionar usuario"
            />
            <SubmitButton>
                <Icon name="add" size={20} color="#FFF" />
            </SubmitButton>
        </Form>
    </Container>
    );
}
