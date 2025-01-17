import { expect, Locator, Page } from "@playwright/test";
import { pageController } from "../common/resources/page_controller";

export  class sanAngelHomePage extends pageController {

    item1 : Locator = this.page.getByRole('link', { name: 'arreglo floral versalles' });
    fieldQuantity : Locator = this.page.getByRole('spinbutton', { name: 'Qty' });
    addToKartShopping: Locator = this.page.getByRole('button', { name: 'Añadir al carrito' });
    banneSanAngel: Locator = this.page.locator('#sticky-wrapper div').filter({ hasText: 'Ocasiones Amor y romance' });
    occasionsSubModule: Locator = this.page.getByRole('button', { name: 'Ocasiones' });
    bannerRomanceAndLove: Locator = this.page.getByRole('link', { name: 'Amor y romance' });
    item2: Locator = this.page.getByRole('link', { name: 'reino de sueños rosas' });
    buyerName: Locator = this.page.getByPlaceholder('Nombre *');
    buyerLastName: Locator = this.page.getByPlaceholder('Apellido *');
    buyerId: Locator = this.page.getByPlaceholder('Cédula de Ciudadanía /');
    phoneNumber: Locator = this.page.getByPlaceholder('Teléfono *');
    email: Locator = this.page.getByPlaceholder('Correo electrónico *');
    receiverName: Locator = this.page.getByPlaceholder('Nombre Completo *');
    citySelector: Locator = this.page.getByLabel('Ciudad *');
    customerDetails: Locator = this.page.locator('#customer_details');
    adddress: Locator = this.page.getByPlaceholder('Dirección *');
    townInformation: Locator = this.page.getByPlaceholder('Info Adicional (Barrio, Apto');
    receiverPhoneNumber: Locator = this.page.getByPlaceholder('Teléfono / Celular *');
    messageCard: Locator = this.page.getByPlaceholder('Mensaje (Va en la tarjeta de');
    signature: Locator = this.page.getByPlaceholder('Firma (Como quieres que');
    calendar: Locator = this.page.getByPlaceholder('Fecha de entrega *');
    selectDay: Locator = this.page.getByRole('cell', { name: '20', exact:true })
    DeliverySchedule: Locator = this.page.getByLabel('Horario de entrega *');
    specialObservation: Locator = this.page.getByPlaceholder('Observaciones Especiales');
    finishOrder: Locator = this.page.getByRole('button', { name: 'Realizar el pedido' });
    
    constructor(public readonly page:Page) {super(page)}
    
    async navigate() {
        await this.page.goto(`https://sanangel.com.co/`);
        await this.page.waitForURL(`https://sanangel.com.co/`);
        }
    async addFirtsItem() {
        await this.item1.click();
        await this.fieldQuantity.click();
        await this.fieldQuantity.fill('2');
        await this.addToKartShopping.click();
    }
    async addsecondItem() {
        await this.banneSanAngel.click();
        await this.item2.click();
        await this.fieldQuantity.click();
        await this.fieldQuantity.fill('5');
        await this.addToKartShopping.click();
    }
    async fillBuyerInfo (){
        await this.buyerName.click()
        await this.buyerName.fill('test tech');
        await this.buyerLastName.click()
        await this.buyerLastName.fill('tech lastname');
        await this.buyerId.click()
        await this.buyerId.fill('1061587584');
        await this.phoneNumber.click()
        await this.phoneNumber.fill('3003528515');
        await this.email.click()
        await this.email.fill('testtech@gmail.com');
    }
    async fillReceiverInfo (){
        await this.receiverName.click()
        await this.receiverName.fill('test tech receiver');
        await this.citySelector.click()
        await this.citySelector.selectOption('Medellín')
        await this.customerDetails.click();
        await this.adddress.click()
        await this.adddress.fill('calle 84c')
        await this.townInformation.click();
        await this.townInformation.fill('belen');
        await this.receiverPhoneNumber.click()
        await this.receiverPhoneNumber.fill('30035328515');
        await this.messageCard.click()
        await this.messageCard.fill('regards');
        await this.signature.click()
        await this.signature.fill('test tech');
        await this.calendar.click()
        await this.selectDay.click();
        await this.DeliverySchedule.click();
        await this.DeliverySchedule.selectOption('Entre 9:00 a.m. y 1:00 pm. (Cierra 11:00 am del mismo día)');
        await this.specialObservation.click()
        await this.specialObservation.fill('none');

    }
}

