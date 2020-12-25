import { ApplicationCommandOptionType } from "slash-commands";
import Subcommand from "../../utils/subcommand";
import GetDemonByIDCommand from "./id/get";

export default class DemonByIDCommand extends Subcommand {
	constructor() {
		super(
			{
				name: "id",
				description: "Demon commands sorted by id",
				type: ApplicationCommandOptionType.SUB_COMMAND_GROUP
			},
			[
				new GetDemonByIDCommand()
			],
			)
	}

	protected run_command: undefined;
}