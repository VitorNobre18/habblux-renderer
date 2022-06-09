import { IDisposable } from '../../core/common/disposable/IDisposable';
import { IConnection } from '../../core/communication/connections/IConnection';
import { RoomModerationSettings } from '../communication/messages/parser/room/data/RoomModerationSettings';
import { UserDataManager } from './UserDataManager';

export interface IRoomSession extends IDisposable
{
    openGift(objectId: number): void;
    setConnection(connection: IConnection): void;
    setControllerLevel(level: number): void;
    setOwnRoomIndex(roomIndex: number): void;
    setRoomOwner(): void;
    start(): boolean;
    reset(roomId: number): void;
    sendChatMessage(text: string, styleId: number): void;
    sendShoutMessage(text: string, styleId: number): void;
    sendWhisperMessage(recipientName: string, text: string, styleId: number): void;
    sendChatTypingMessage(isTyping: boolean): void;
    sendMottoMessage(motto: string): void;
    sendDanceMessage(danceId: number): void;
    sendWhisperGroupMessage(recipientName: string): void;
    sendExpressionMessage(expression: number): void;
    sendSignMessage(sign: number): void;
    sendPostureMessage(posture: number): void;
    sendDoorbellApprovalMessage(userName: string, flag: boolean): void;
    sendAmbassadorAlertMessage(userId: number): void;
    sendKickMessage(userId: number): void;
    sendMuteMessage(userId: number, minutes: number): void;
    sendBanMessage(userId: number, type: string): void;
    sendGiveRightsMessage(userId: number): void;
    sendTakeRightsMessage(userId: number): void;
    sendPollStartMessage(pollId:number):void;
    sendPollRejectMessage(pollId:number):void;
    sendPollAnswerMessage(pollId:number, questionId:number, answers:string[]):void;
    updateMoodlightData(id: number, effectId: number, color: number, brightness: number, apply: boolean): void;
    toggleMoodlightState(): void;
    pickupPet(id: number): void;
    pickupBot(id: number): void;
    requestMoodlightSettings(): void;
    mountPet(id: number): void;
    dismountPet(id: number): void;
    usePetProduct(itemId: number, petId: number): void;
    removePetSaddle(id: number): void;
    togglePetBreeding(id: number): void;
    togglePetRiding(id: number): void;
    useMultistateItem(id: number): void;
    harvestPet(id: number): void;
    compostPlant(id: number): void;
    connection: IConnection;
    userDataManager: UserDataManager;
    roomId: number;
    state: string;
    tradeMode: number;
    _Str_7411: boolean;
    doorMode: number;
    allowPets: boolean;
    controllerLevel: number;
    ownRoomIndex: number;
    isGuildRoom: boolean;
    isRoomOwner: boolean;
    isDecorating: boolean;
    isSpectator: boolean;
    moderationSettings: RoomModerationSettings;
}