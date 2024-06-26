<?php

declare(strict_types=1);

/**
 * @copyright Copyright (c) 2020, Georg Ehrke
 *
 * @author Georg Ehrke <oc.list@georgehrke.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
namespace OCA\DAV\Events;

use OCP\EventDispatcher\Event;

/**
 * Class CalendarDeletedEvent
 *
 * @package OCA\DAV\Events
 * @since 20.0.0
 */
class CalendarDeletedEvent extends Event {

	/** @var int */
	private $calendarId;

	/** @var array */
	private $calendarData;

	/** @var array  */
	private $shares;

	/**
	 * CalendarDeletedEvent constructor.
	 *
	 * @param int $calendarId
	 * @param array $calendarData
	 * @param array $shares
	 * @since 20.0.0
	 */
	public function __construct(int $calendarId,
		array $calendarData,
		array $shares) {
		parent::__construct();
		$this->calendarId = $calendarId;
		$this->calendarData = $calendarData;
		$this->shares = $shares;
	}

	/**
	 * @return int
	 * @since 20.0.0
	 */
	public function getCalendarId(): int {
		return $this->calendarId;
	}

	/**
	 * @return array
	 * @since 20.0.0
	 */
	public function getCalendarData(): array {
		return $this->calendarData;
	}

	/**
	 * @return array
	 * @since 20.0.0
	 */
	public function getShares(): array {
		return $this->shares;
	}
}
